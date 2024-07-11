import typedocApiPlugin from 'docusaurus-plugin-typedoc-api';
import type { LoadContext, Plugin } from '@docusaurus/types';
import { PluginContentLoadedActions } from '@docusaurus/types';
import { DocusaurusPluginTypeDocApiOptions, LoadedContent } from 'docusaurus-plugin-typedoc-api/lib/types';
import type { RouteConfig } from '@docusaurus/types/src/routing';
import { PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import path from 'path';
import fs from 'fs';

const replacements = {
    'ApiIndex.js': require.resolve('./components/ApiIndex.tsx'),
};

function swapComponents(config: RouteConfig, replacements: Record<string, string>): RouteConfig {
    if (config.component && replacements[path.basename(config.component)]) {
        config.component = replacements[path.basename(config.component)];
    }

    if (config.routes) {
        config.routes.forEach(route => swapComponents(route, replacements));
    }

    return config;
}

class CategorisedSidebars {
    private readonly sidebars: PropSidebarItemCategory[] = [];

    constructor(private readonly categories: Array<{ label: string, items: string[] }>) {
        this.sidebars = categories.map(category => CategorisedSidebars.createCategorySidebar(category));
    }

    addPackageSidebar(sidebar: PropSidebarItemCategory): CategorisedSidebars {
        const found = this.categories.map((category, categoryIndex) => {
            return {
                sidebarIndex: category.items.indexOf(sidebar.label), // -1 if not found
                categoryIndex,
                category
            }
        }).filter(({ sidebarIndex }) => sidebarIndex > -1)[0];

        if (found) {
            this.sidebars[found.categoryIndex].items[found.sidebarIndex] = sidebar;
        }

        return this;
    }

    toJSON() {
        return this.sidebars;
    }

    private static createCategorySidebar(category: { label: string, items: string[] }): PropSidebarItemCategory {
        return {
            label: category.label,
            collapsed: false,
            collapsible: false,
            type: 'category',
            items: Array.from({ length: category.items.length }),
        }
    }
}

export interface DocusaurusPluginTypeDocApiExtendedOptions extends DocusaurusPluginTypeDocApiOptions {
    categories: Array<{ label: string, items: string[] }>;
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
                    (acc, current) => acc.addPackageSidebar(current),
                    new CategorisedSidebars(pluginOptions.categories)
                ).toJSON()
            ];

            fs.writeFileSync(pathToSidebars, `module.exports = ${JSON.stringify(categorisedSidebars, null, 2)};`)

            loadedContent.loadedVersions[0].sidebars = categorisedSidebars;

            return loadedContent;
        },

        async contentLoaded({ content, actions }) {

            // fs.writeFileSync('content.jsoan', JSON.stringify(content.loadedVersions[0].packages, null, 4), { encoding: 'utf-8' })

            const actionsProxy: PluginContentLoadedActions = {
                ...actions,
                addRoute(config: RouteConfig): void {
                    actions.addRoute(swapComponents(config, replacements));
                }
            }

            return plugin.contentLoaded({ content, actions: actionsProxy })
        }
    };
}
