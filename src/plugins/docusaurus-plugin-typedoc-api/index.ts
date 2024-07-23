import typedocApiPlugin from 'docusaurus-plugin-typedoc-api';
import type { LoadContext, Plugin } from '@docusaurus/types';
import { PluginContentLoadedActions, RouteConfig, RouteModules } from '@docusaurus/types';
import {
    DocusaurusPluginTypeDocApiOptions,
    LoadedContent,
    PackageReflectionGroup,
    TSDSignatureReflection
} from 'docusaurus-plugin-typedoc-api/lib/types';
import fs from 'fs';
import path from 'path';
import { CategoryDetails, PackageDetails } from '../../config/PackageJsonParser';
import { SidebarGenerator } from './SidebarGenerator';
import { TSDDeclarationReflection } from 'docusaurus-plugin-typedoc-api/src/types';

function augmentRoute(config: RouteConfig, replacements: Record<string, {
    component: string,
    modules?: RouteModules
}>): RouteConfig {
    const augmentation = replacements[path.basename(config.component)];

    if (config.component && augmentation) {
        config.component = augmentation.component;
        if (config.modules && augmentation.modules) {
            config.modules = {
                ...config.modules,
                ...augmentation.modules
            }
        }
    }

    if (config.routes) {
        config.routes.forEach(route => augmentRoute(route, replacements));
    }

    return config;
}

export interface DocusaurusPluginTypeDocApiExtendedOptions extends DocusaurusPluginTypeDocApiOptions {
    categories: CategoryDetails[];
}

export interface CategoryWithExtendedPackageDetails<T extends object> extends CategoryDetails {
    items: Array<PackageDetails & T>;
}

function addPackagePermalinksToCategory(packageReflectionGroups: PackageReflectionGroup[]): (category: CategoryDetails) => CategoryWithExtendedPackageDetails<{ permalink: string }> {
    return (category: CategoryDetails) => ({
        ...category,
        items: category.items.map(addPermalinkToPackage(packageReflectionGroups))
    })
}

function addPermalinkToPackage<P extends { name: string }>(packageReflectionGroups: PackageReflectionGroup[]): (pkg: P) => P & { permalink: string } {
    return function (pkg: P) {
        return {
            ...pkg,
            permalink: packageReflectionGroups.find(prg => prg.packageName === pkg.name)
                ?.entryPoints.find(entryPoint => entryPoint.index)
                ?.reflection.permalink ?? ''
        }
    }
}

function fixSerenityMonorepoSourceLink(packageReflectionGroups: PackageReflectionGroup[]): void {
    packageReflectionGroups.forEach(fixSourceLink(fileName => {
        const pattern = /(:?node_modules\/)?(?<namespace>@[a-z0-9-_]+)?\/?(?<package_name>[a-z0-9-_]+)\/(?<path_to_file>.*)/

        const match = fileName.match(pattern);

        if (! match) {
            return fileName;
        }

        const { namespace, package_name, path_to_file } = match.groups;

        if (namespace === '@serenity-js') {
            return path.join(
                'packages',
                package_name,
                path_to_file.replace('.d.ts', '.ts')    // replacing .d.ts with .ts to link to the source file, even though the line number might be off
            );
        }

        // Don't link to sources outside the Serenity/JS monorepo since TypeDoc API plugin doesn't support that
        // https://github.com/milesj/docusaurus-plugin-typedoc-api/blob/b97223337544eeeaaf7019b5c50932555999c341/packages/plugin/src/components/SourceLink.tsx#L30
        return undefined;
    }));
}

function fixSourceLink(transformation: (originalFileName: string) => string): (packageReflectionGroup: PackageReflectionGroup) => void {
    return function (packageReflectionGroup: PackageReflectionGroup) {
        packageReflectionGroup.entryPoints.forEach(entryPoint => {
            replaceFileNamePrefixInReflection(transformation)(entryPoint.reflection);
        });
    }
}

function replaceFileNamePrefixInReflection(transformation: (originalFileName: string) => string): (reflection: TSDSignatureReflection | TSDDeclarationReflection) => void {
    return function (reflection: TSDDeclarationReflection) {
        reflection.sources = reflection.sources?.map(source => {
            const newFilename = transformation(source.fileName);
            return newFilename ? { ...source, fileName: newFilename } : undefined;
        }).filter(Boolean);

        reflection.signatures?.forEach(replaceFileNamePrefixInReflection(transformation));
        reflection.children?.forEach(replaceFileNamePrefixInReflection(transformation));

        // reflection.extendedTypes?.forEach(extendedType => {
        //     if (extendedType.type === 'reference' && extendedType.target['sourceFileName']) {
        //         const newSourceFileName = transformation(extendedType.target['sourceFileName']);
        //
        //         if (newSourceFileName) {
        //             extendedType.target['sourceFileName'] = newSourceFileName;
        //         }
        //     }
        // });
    }
}

export default function localTypedocApiPlugin(
    context: LoadContext,
    pluginOptions: DocusaurusPluginTypeDocApiExtendedOptions,
): Plugin<LoadedContent> {
    const plugin = typedocApiPlugin(context, pluginOptions);

    const pathToSidebars = path.join(context.generatedFilesDir, 'api-sidebar-default-current.js');

    return {
        ...plugin,
        async loadContent(): Promise<LoadedContent> {

            const loadedContent = await plugin.loadContent();

            const sidebars = require(pathToSidebars);

            const categorisedSidebars = [
                {
                    href: '/api/',
                    label: 'Serenity/JS API',
                    type: 'link'
                },
                ...sidebars.reduce(
                    (acc, current) => acc.add(current),
                    new SidebarGenerator(pluginOptions.categories, category => ({
                        label: category.name,
                        collapsed: false,
                        collapsible: false,
                        type: 'category',
                        items: [],
                    }))
                ).toJSON()
            ];

            fs.writeFileSync(pathToSidebars, `module.exports = ${ JSON.stringify(categorisedSidebars, null, 2) };`)

            loadedContent.loadedVersions[0].sidebars = categorisedSidebars;

            return loadedContent;
        },

        async contentLoaded({ content, actions }) {

            // Fix links to GitHub.com
            fixSerenityMonorepoSourceLink(content.loadedVersions[0].packages)

            // Add permalinks to package categories
            const categories = pluginOptions.categories
                .map(addPackagePermalinksToCategory(content.loadedVersions[0].packages))

            await actions.createData(
                `packages-current.json`,
                JSON.stringify(content.loadedVersions[0].packages),
            )

            fs.writeFileSync('packages-output.json', JSON.stringify(content.loadedVersions[0].packages, null, 4));

            const augmentations = {
                'ApiIndex.js': {
                    component: require.resolve('./components/ApiIndex.tsx'),
                    modules: {
                        packages: await actions.createData(
                            `packages-current.json`,
                            JSON.stringify(content.loadedVersions[0].packages),
                        ),
                        categories: await actions.createData(
                            `packages-categories.json`,
                            JSON.stringify(categories),
                        ),
                    }
                },
            };

            const actionsProxy: PluginContentLoadedActions = {
                ...actions,
                addRoute(config: RouteConfig): void {
                    const routeConfig = augmentRoute(config, augmentations);

                    actions.addRoute(routeConfig);
                }
            }

            return plugin.contentLoaded({ content, actions: actionsProxy })
        }
    };
}
