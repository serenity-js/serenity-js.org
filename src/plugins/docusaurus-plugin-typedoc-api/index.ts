import typedocApiPlugin from 'docusaurus-plugin-typedoc-api';
import type { LoadContext, Plugin } from '@docusaurus/types';
import { PluginContentLoadedActions } from '@docusaurus/types';
import {
    DocusaurusPluginTypeDocApiOptions,
    LoadedContent,
    PackageReflectionGroup
} from 'docusaurus-plugin-typedoc-api/lib/types';
import { RouteConfig, RouteModules } from '@docusaurus/types/src/routing';
import path from 'path';
import fs from 'fs';
import { Categoriser, CategoryDescriptor } from './Categoriser';
import { PackageConfig } from 'docusaurus-plugin-typedoc-api/src/types';
import { PackageCategory, PackageCompatibility } from './types';
import { normalizeUrl } from '@docusaurus/utils';

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
    integrationsOfInterest: string[];
    categories: CategoryDescriptor[];
}

function addPackageCompatibilityData(projectRoot: string, integrationsOfInterest: string[]): (packageDescriptor: PackageConfig | string) => PackageCompatibility {
    return function (packageDescriptor: PackageConfig | string) {
        const pathToPackage = typeof packageDescriptor === 'string'
            ? packageDescriptor
            : packageDescriptor.path;

        const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, pathToPackage, 'package.json')).toString('utf-8'));

        const dependencies = {
            ...packageJson.dependencies,
            ...packageJson.peerDependencies,
        };

        const compatibility = Object.keys(dependencies)
            .filter(dependency => integrationsOfInterest.includes(dependency))
            .reduce((acc, key) => {
                acc[key] = dependencies[key];
                return acc;
            }, {});

        return {
            name: packageJson.name,
            label: packageJson.name,
            version: packageJson.version,
            description: packageJson.description,
            compatibility,
        }
    }
}

function addPackagePermalinks<P extends { name: string }>(packageReflectionGroups: PackageReflectionGroup[]): (pkg: P) => P & { permalink: string } {
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
    const pathToSidebars = path.join(__dirname, '../../../.docusaurus/api-sidebar-default-current.js');

    return {
        ...plugin,
        async loadContent(): Promise<LoadedContent> {

            const loadedContent = await plugin.loadContent();

            const sidebars = require(pathToSidebars)

            const categorisedSidebars = [
                {
                    href: '/api/',
                    label: 'Serenity/JS API',
                    type: 'link'
                },
                ...sidebars.reduce(
                    (acc, current) => acc.add(current),
                    new Categoriser(pluginOptions.categories, category => ({
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
            const packageCategories: Array<PackageCategory> = pluginOptions.packages
                .map(addPackageCompatibilityData(pluginOptions.projectRoot, pluginOptions.integrationsOfInterest))
                // .map(addPackageUrl(normalizeUrl([context.baseUrl, options.routeBasePath ?? 'api'])))
                .map(addPackagePermalinks(content.loadedVersions[0].packages))
                .reduce(
                    (acc, current) => acc.add(current),
                    new Categoriser<PackageCompatibility, PackageCategory>(pluginOptions.categories, category => ({
                        label: category.name,
                        description: category.description,
                        items: [],
                    }))
                ).toJSON();

            const augmentations = {
                'ApiIndex.js': {
                    component: require.resolve('./components/ApiIndex.tsx'),
                    modules: {
                        categories: await actions.createData(
                            `packages-categories.json`,
                            JSON.stringify(packageCategories),
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
