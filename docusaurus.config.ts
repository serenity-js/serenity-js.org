import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import tabBlocks from 'docusaurus-remark-plugin-tab-blocks';
import remarkLinkRewrite from './src/plugins/remark/link-rewrite';

import pkg from './package.json';
import redirects from './redirects.config';

const remarkOptions = {
    remarkPlugins: [
        [ npm2yarn, { sync: true, converters: [ 'yarn' ] } ],
        [ tabBlocks, {
            sync: true,
            labels: [
                [ 'json', 'JSON' ],
                [ 'jsx', 'JSX' ],
                [ 'tsx', 'TSX' ],
                [ 'js', 'JavaScript' ],
                [ 'ts', 'TypeScript' ],
            ],
        } ],
        [ remarkLinkRewrite, {
            replacer: (url: string) => {
                return url.startsWith('https://serenity-js.org/')
                    ? url.replace('https://serenity-js.org/', '/')
                    : url;
            }
        } ]
    ],
}

const editUrl = (path: string) =>
    new URL(path, `https://github.com/serenity-js/serenity-js.org/tree/main`).toString();

const config: Config = {
    title: 'Serenity/JS',
    tagline: 'Collaborative test automation at scale!',
    favicon: 'icons/favicon.ico',
    trailingSlash: true,

    customFields: {
        supportedEngines: pkg.engines,
        currentNodeVersion: process.version,
        description:
            `Serenity/JS is an innovative test automation framework designed to help you create
            high-quality, business-focused test scenarios that interact with any interface of your system
            and produce comprehensive test reports that build trust between delivery teams and the business.
            `,
    },

    url: 'https://serenity-js.org',
    baseUrl: '/',
    organizationName: 'serenity-js',
    projectName: 'serenity-js.org',

    onBrokenLinks: 'warn',
    // onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    // onBrokenMarkdownLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: [ 'en' ],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    ...remarkOptions,
                    editUrl: editUrl('src/docs/handbook'),
                    path: './src/docs/handbook',
                    routeBasePath: 'handbook',
                    sidebarPath: './src/sidebars/handbook.ts',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                },
                blog: {
                    ...remarkOptions,
                    editUrl: editUrl('src/blog'),
                    path: './src/blog',
                    showReadingTime: true,
                },
                pages: {
                    ...remarkOptions,
                    path: './src/pages',
                },
                theme: {
                    customCss: './src/css/custom.scss',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'images/serenity-js-social-card.jpg',    // open graph
        colorMode: {
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        announcementBar: {
            id: 'announcement-bar',
            content: 'Get our book - <a target="_blank" rel="noopener noreferrer" href="https://www.manning.com/books/bdd-in-action-second-edition">"BDD in Action, Second Edition"</a> 📚',
            backgroundColor: '#FFE46E',
            isCloseable: false,
        },
        navbar: {
            title: 'Serenity/JS',
            hideOnScroll: true,
            style: 'dark',
            logo: {
                height: 10,
                alt: 'Serenity/JS',
                src: 'images/serenity-js-logo-for-dark-backgrounds.svg',
                className: 'serenity-js-logo',
            },
            items: [
                { label: 'Handbook', type: 'doc', docId: 'index', position: 'left' },
                { label: 'API', to: '/api/', position: 'left' },
                { to: '/blog', label: 'Blog', position: 'left' },
                { to: '/community', label: 'Community', position: 'left' },
                {
                    to: 'https://github.com/sponsors/serenity-js',
                    label: 'Sponsors',
                    position: 'left',
                },
                { label: `Releases`, to: 'releases', position: 'left' },
                {
                    href: 'https://www.youtube.com/@serenity-js',
                    'aria-label': 'Serenity/JS YouTube channel',
                    title: 'Serenity/JS YouTube channel',
                    position: 'right',
                    className: 'navbar-youtube-link',
                },
                {
                    href: 'https://github.com/serenity-js',
                    'aria-label': 'Serenity/JS GitHub repositories',
                    title: 'Serenity/JS GitHub repositories',
                    position: 'right',
                    className: 'navbar-github-link',
                },
            ],
        },
        footer: {
            copyright: `Made with 💛 in London, UK. Copyright © 2016-${ new Date().getFullYear() } <a href="https://janmolak.com">Jan Molak</a>, smartcode ltd.`,
            links: [
                {
                    title: 'Handbook',
                    items: [
                        { label: 'Why Serenity/JS', to: '/handbook/' },
                        { label: 'Getting started', to: '/handbook/getting-started' },
                        { label: 'Web testing', to: '/handbook/web-testing' },
                        { label: 'API testing', to: '/handbook/api-testing' },
                        { label: 'Mobile testing', to: '/handbook/mobile-testing' },
                        { label: 'Core Design Patterns', to: '/handbook/design' },
                        { label: 'Reporting', to: '/handbook/reporting' },
                        { label: 'Test runners', to: '/handbook/test-runners' },
                        { label: 'Integration', to: '/handbook/integration' },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        { label: 'Serenity/JS Community', to: '/community' },
                        { label: 'Blog and announcements', to: '/blog' },
                        {
                            label: `Forum and Q'n'A`,
                            href: 'https://github.com/orgs/serenity-js/discussions',
                        },
                        {
                            label: 'Community Chat',
                            href: 'https://matrix.to/#/#serenity-js:gitter.im',
                        },
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/serenity-js',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/serenity-js',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/@serenity-js',
                        },
                        {
                            label: 'GitHub Sponsors',
                            href: 'https://github.com/sponsors/serenity-js',
                        },
                    ],
                },
                {
                    title: 'Developers',
                    items: [
                        { label: 'API Docs', to: '/api/' },
                        {
                            label: 'Project Templates',
                            to: 'https://github.com/serenity-js/?q=template&type=all&language=&sort='
                        },
                        { label: 'Serenity/JS GitHub', href: 'https://github.com/serenity-js', },
                        { label: 'Report an issue', href: 'https://github.com/serenity-js/serenity-js/issues', },
                    ],
                },
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'License',
                            to: '/legal/license',
                        },
                        {
                            label: 'Privacy policy',
                            to: '/legal/privacy-policy',
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: [
                'diff',
                'docker',
                'gherkin',
                'javascript',
                'json',
                'properties',
                'typescript'
            ],
        },
        mermaid: {
            theme: {
                light: 'neutral',
                dark: 'neutral'
            },
        },
        algolia: {
            appId: 'BQR1GG2FWV',
            // Search only (public) API key
            apiKey: 'b4ffe01f2e8ba40f5f49153cab71b9e8',
            indexName: 'serenity-js',
            contextualSearch: true,
        },
    } satisfies Preset.ThemeConfig,

    markdown: {
        mermaid: true,
    },
    themes: [
        '@docusaurus/theme-mermaid'
    ],

    plugins: [
        'docusaurus-plugin-sass',
        [
            // 'docusaurus-plugin-typedoc-api',
            require.resolve('./src/plugins/docusaurus-plugin-typedoc-api'),
            {
                gitRefName: 'main',
                projectRoot: __dirname,
                categories: [
                    { label: 'Core Modules', items: [ '@serenity-js/core', '@serenity-js/assertions' ] },
                    { label: 'Web Testing', items: [ '@serenity-js/web', '@serenity-js/playwright', '@serenity-js/protractor', '@serenity-js/webdriverio' ] },
                    { label: 'REST API Testing', items: [ '@serenity-js/rest', '@serenity-js/local-server' ] },
                    { label: 'Reporting', items: [ '@serenity-js/console-reporter', '@serenity-js/serenity-bdd' ] },
                    { label: 'Test Runners', items: [ '@serenity-js/cucumber', '@serenity-js/jasmine', '@serenity-js/mocha', '@serenity-js/playwright-test' ] },
                ],
                packages: [
                    {
                        path: './node_modules/@serenity-js/core',
                        entry: {
                            index: { label: 'index', path: 'lib/index.d.ts' },
                            adapter: { label: 'Test runner adapter', path: 'lib/adapter/index.d.ts' },
                            events: { label: 'Domain Events', path: 'lib/events/index.d.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/assertions',
                        entry: { index: 'lib/index.d.ts' },
                    },

                    {
                        path: './node_modules/@serenity-js/web',
                        entry: { index: 'lib/index.d.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/playwright',
                        entry: { index: 'lib/index.d.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/protractor',
                        entry: {
                            index: { label: 'index', path: 'lib/index.d.ts' },
                            adapter: { label: 'Test runner adapter', path: 'lib/adapter/index.d.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/webdriverio',
                        entry: {
                            index: { label: 'index', path: 'lib/index.d.ts' },
                            adapter: { label: 'Test runner adapter', path: 'lib/adapter/index.d.ts' },
                        },
                    },

                    {
                        path: './node_modules/@serenity-js/rest',
                        entry: { index: 'lib/index.d.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/local-server',
                        entry: { index: 'lib/index.d.ts' },
                    },


                    {
                        path: './node_modules/@serenity-js/console-reporter',
                        entry: { index: 'lib/index.d.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/serenity-bdd',
                        entry: { index: 'lib/index.d.ts' },
                    },

                    {
                        path: './node_modules/@serenity-js/cucumber',
                        entry: {
                            index: { label: 'index', path: 'lib/index.d.ts' },
                            adapter: { label: 'Test runner adapter', path: 'lib/adapter/index.d.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/jasmine',
                        entry: {
                            index: { label: 'index', path: 'lib/index.d.ts' },
                            adapter: { label: 'Test runner adapter', path: 'lib/adapter/index.d.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/mocha',
                        entry: {
                            index: { label: 'index', path: 'lib/index.d.ts' },
                            adapter: { label: 'Test runner adapter', path: 'lib/adapter/index.d.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/playwright-test',
                        entry: {
                            index: { label: 'index', path: 'lib/index.d.ts' },
                        },
                    },
                ],
                // minimal: false,
                readmes: true,
                debug: true,
                typedocOptions: {
                    excludeExternals: false,

                    // typedoc-plugin-ignore-inherited-static-methods
                    // logIgnoredInheritedStaticMethods: true,

                    categorizeByGroup: true,
                    plugin: [
                        './src/plugins/typedoc/ignore-inherited-static-methods.js',
                        'typedoc-plugin-mdn-links',
                        'typedoc-plugin-replace-text',
                    ],
                    sort: [
                        'static-first',
                        'source-order',
                    ],
                    visibilityFilters: {
                        protected: true,
                        private: false,
                    },

                    replaceText: {
                        inCodeCommentText: true,
                        inCodeCommentTags: true,
                        inIncludedFiles: true,
                        replacements: [
                            {
                                pattern: "https://serenity-js.org/",
                                replace: "/"
                            },
                        ],
                    },
                }
            },
        ],
        [
            'content-docs',
            {
                id: 'community',
                editUrl: editUrl('src/docs/community'),
                path: './src/docs/community',
                routeBasePath: 'community',
                sidebarPath: './src/sidebars/community.ts',
                ...remarkOptions,
            },
        ],
        [
            'content-docs',
            {
                id: 'releases',
                editUrl: editUrl('src/docs/releases'),
                path: './src/docs/releases',
                routeBasePath: 'releases',
                sidebarPath: './src/sidebars/releases.ts',
                ...remarkOptions,
            },
        ],
        [
            require.resolve('./src/plugins/piwik'),
            {
                id: '8497b9df-f942-4fb6-9f4f-eade34bab231',
                enable: true,
            }
        ],
        [
            require.resolve('./src/plugins/presets'),
            {
                projectRoot: __dirname,
                include: [
                    './node_modules/@serenity-js/*'
                ],
                caching: {
                    enabled: true,
                    duration: 24 * 60 * 60 * 1000,
                },
                sampling: {
                    enabled: true,
                    rate: 0.1,
                },
            }
        ],
        // [
        //     require.resolve('./src/plugins/changelog/index.js'),
        //     {
        //         blogTitle: 'Serenity/JS Changelog \uD83C\uDF81',
        //         blogDescription: 'Keep yourself up-to-date about new features in every release',
        //         blogSidebarCount: 'ALL',
        //         blogSidebarTitle: 'Changelog',
        //         routeBasePath: '/changelog',
        //         showReadingTime: false,
        //         postsPerPage: 10,
        //         archiveBasePath: undefined,
        //         blogTagsListComponent: '@theme/BlogTagsListPage',
        //         blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
        //         // authorsMapPath: 'authors.json',
        //         feedOptions: {
        //             type: 'all',
        //             title: 'Serenity/JS changelog',
        //             description:
        //                 'Keep yourself up-to-date about new features in every release',
        //             copyright: `Copyright © 2016-${new Date().getFullYear()} Jan Molak, SmartCode Ltd`,
        //             language: 'en',
        //         },
        //     },
        // ],
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 85,
                steps: 4,
                disableInDev: true,
            },
        ],
        [
            '@docusaurus/plugin-client-redirects',
            redirects,
        ],
    ]
};

export default config;
