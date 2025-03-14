import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import tabBlocks from 'docusaurus-remark-plugin-tab-blocks';
import remarkLinkRewrite from './src/plugins/remark/link-rewrite';

import core from '@serenity-js/core/package.json';
import redirects from './redirects.config';
import packageJsonParser from './src/config/PackageJsonParser';

const remarkOptions = {
    remarkPlugins: [
        [ npm2yarn, { sync: true, converters: [ 'yarn', 'pnpm' ] } ],
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
};

// todo: remove
const integrationsOfInterest = [
    'axios',
    '@cucumber/cucumber',
    'cucumber',
    'express',
    'jasmine',
    '@hapi/hapi',
    'koa',
    'mocha',
    'playwright-core',
    '@playwright/test',
    'protractor',
    'restify',
    '@wdio/cli',
    'webdriverio',
];

const categories = packageJsonParser.parse(['./node_modules/@serenity-js/*/package.json']);

const editUrl = `https://github.com/serenity-js/serenity-js.org/tree/main`;

const config: Config = {
    title: 'Serenity/JS',
    tagline: 'Collaborative test automation at scale!',
    favicon: 'icons/favicon.ico',
    trailingSlash: true,
    githubHost: 'github.com',
    staticDirectories: [ 'static' ],

    customFields: {
        supportedEngines: core.engines,
        currentNodeVersion: process.version,
        categories,
        description:
            `Serenity/JS is an innovative test automation framework designed to help you create
            high-quality, business-focused test scenarios that interact with any interface of your system
            and produce comprehensive test reports that build trust between delivery teams and the business.
            `,
    },

    url: 'https://serenity-js.org',
    baseUrl: '/',
    organizationName: 'serenity-js',
    projectName: 'serenity-js',

    // onBrokenLinks: 'warn',
    onBrokenLinks: 'throw',
    // onBrokenMarkdownLinks: 'warn',
    onBrokenMarkdownLinks: 'throw',

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
                    editUrl,
                    path: './src/docs/handbook',
                    routeBasePath: 'handbook',
                    sidebarPath: './src/sidebars/handbook.ts',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                    async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
                        const sidebarItems = await defaultSidebarItemsGenerator(args);
                        // DEBUG sidebar items
                        // console.log({ sidebarItems })
                        return sidebarItems.filter(item => ! item.id.endsWith('index'));
                    },
                },
                blog: {
                    ...remarkOptions,
                    editUrl,
                    path: './src/blog',
                    showReadingTime: true,
                    blogSidebarTitle: 'Serenity/JS News',
                    blogSidebarCount: 'ALL',
                    onUntruncatedBlogPosts: 'ignore',
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
                { to: '/blog', label: 'News', position: 'left' },
                { label: `Releases`, to: 'releases', position: 'left' },
                { to: '/community', label: 'Community', position: 'left' },
                {
                    to: 'https://github.com/sponsors/serenity-js',
                    label: 'Sponsor',
                    position: 'left',
                },
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
                        { label: 'Tutorials', to: '/handbook/tutorials' },
                        { label: 'Core Design Patterns', to: '/handbook/design' },
                        { label: 'Web Testing', to: '/handbook/web-testing' },
                        { label: 'API Testing', to: '/handbook/api-testing' },
                        { label: 'Mobile Testing', to: '/handbook/mobile-testing' },
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
                        { label: 'Report an issue', href: '/community/contributing/reporting-issues/', },
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
                categories,
                packages: [
                    {
                        path: './node_modules/@serenity-js/core',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
                            adapter: { label: 'Test runner adapter', path: 'src/adapter/index.ts' },
                            events: { label: 'Domain Events', path: 'src/events/index.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/assertions',
                        entry: { index: 'src/index.ts' },
                    },

                    {
                        path: './node_modules/@serenity-js/web',
                        entry: { index: 'src/index.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/playwright',
                        entry: { index: 'src/index.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/protractor',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
                            adapter: { label: 'Test runner adapter', path: 'src/adapter/index.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/webdriverio',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
                            adapter: { label: 'Test runner adapter', path: 'src/adapter/index.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/webdriverio-8',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
                            adapter: { label: 'Test runner adapter', path: 'src/adapter/index.ts' },
                        },
                    },

                    {
                        path: './node_modules/@serenity-js/rest',
                        entry: { index: 'src/index.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/local-server',
                        entry: { index: 'src/index.ts' },
                    },


                    {
                        path: './node_modules/@serenity-js/console-reporter',
                        entry: { index: 'src/index.ts' },
                    },
                    {
                        path: './node_modules/@serenity-js/serenity-bdd',
                        entry: { index: 'src/index.ts' },
                    },

                    {
                        path: './node_modules/@serenity-js/cucumber',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
                            adapter: { label: 'Test runner adapter', path: 'src/adapter/index.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/jasmine',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
                            adapter: { label: 'Test runner adapter', path: 'src/adapter/index.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/mocha',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
                            adapter: { label: 'Test runner adapter', path: 'src/adapter/index.ts' },
                        },
                    },
                    {
                        path: './node_modules/@serenity-js/playwright-test',
                        entry: {
                            index: { label: 'index', path: 'src/index.ts' },
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
                editUrl,
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
                editUrl,
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
                // todo: inject the parser instead of the integrationsOfInterest
                integrationsOfInterest,
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
