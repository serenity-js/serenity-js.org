import typedocApiPlugin from 'docusaurus-plugin-typedoc-api';
import type { LoadContext, Plugin } from '@docusaurus/types';
import { PluginContentLoadedActions, RouteConfig, RouteModules } from '@docusaurus/types';
import {
    DocusaurusPluginTypeDocApiOptions,
    LoadedContent,
    PackageReflectionGroup
} from 'docusaurus-plugin-typedoc-api/lib/types';
import fs from 'fs';
import path from 'path';
import { CategoryDetails, PackageDetails } from '../../config/PackageJsonParser';
import { SidebarGenerator } from './SidebarGenerator';
import {
    ReflectionTransformer,
    SerenitySourceLinkTransformation,
    TargetDeclarationTransformation
} from './reflections';

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

function addPackagePermalinksToCategory(packageReflectionGroups: PackageReflectionGroup[]): (category: CategoryDetails) => CategoryWithExtendedPackageDetails<{
    permalink: string
}> {
    return (category: CategoryDetails) => ({
        ...category,
        items: category.items.map(addPermalinkToPackage(packageReflectionGroups))
    })
}

function addPermalinkToPackage<P extends {
    name: string
}>(packageReflectionGroups: PackageReflectionGroup[]): (pkg: P) => P & { permalink: string } {
    return function (pkg: P) {
        return {
            ...pkg,
            permalink: packageReflectionGroups.find(prg => prg.packageName === pkg.name)
                ?.entryPoints.find(entryPoint => entryPoint.index)
                ?.reflection.permalink ?? ''
        }
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

            // Fix links to GitHub.com and classes from other Serenity/JS modules
            const reflectionTransformer = new ReflectionTransformer([
                new SerenitySourceLinkTransformation(),
                new TargetDeclarationTransformation(content.loadedVersions[0].packages),
            ]);

            content.loadedVersions[0].packages = reflectionTransformer.transform(content.loadedVersions[0].packages);

            // Add permalinks to package categories
            const categories = pluginOptions.categories
                .map(addPackagePermalinksToCategory(content.loadedVersions[0].packages));

            await actions.createData(
                `packages-current.json`,
                JSON.stringify(content.loadedVersions[0].packages),
            );

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
