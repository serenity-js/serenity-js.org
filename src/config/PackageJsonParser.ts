import glob from 'fast-glob';
import fs from 'fs';

export interface PackageDetails {
    name: string;
    description: string;
    version: string;
    engines: { node: string };
    compatibility: Record<string, {
        version: string;
        type: 'direct' | 'optional' | 'required';
    }>;
}

export interface CategoryDetails {
    name: string;
    description: string;
    items: PackageDetails[];
}

export class PackageJsonParser {
    constructor(
        private readonly compatiblePackagesToInclude: string[],
        private readonly categories: Record<string, { description: string, items: string[] }>,
    ) {
    }

    parse(globPathsToPackageJsonFiles: string[]): CategoryDetails[] {
        const paths = glob.sync(globPathsToPackageJsonFiles, { onlyFiles: true, globstar: true, absolute: true });

        const packageJsonFiles = paths.map(pathToPackageJSON => JSON.parse(fs.readFileSync(pathToPackageJSON).toString('utf8')))

        return Object.entries(this.categories).map(([ categoryName, categoryDetails ]) => ({

            name: categoryName,
            description: categoryDetails.description,   // todo: parse markdown
            items: categoryDetails.items.map(packageName => {
                const packageJson = packageJsonFiles.find(packageJson => packageJson.name === packageName);

                if (!packageJson) {
                    throw new Error(`Package ${ packageName } not found in the provided package.json files`);
                }

                const dependencies = {
                    ...packageJson.dependencies,
                    ...packageJson.peerDependencies,
                };

                const optionalDependencies = Object.entries(packageJson?.peerDependenciesMeta ?? {})
                    .filter(([ dependencyName, dependencyMeta ]: [ string, {
                        optional: boolean
                    } ]) => dependencyMeta.optional)
                    .map(([ dependencyName, dependencyMeta ]) => dependencyName);

                const compatibility = Object.keys(dependencies)
                    .filter(dependency => this.compatiblePackagesToInclude.includes(dependency))
                    .reduce((acc, key) => ({
                        ...acc,
                        [key]: {
                            version: dependencies[key],
                            type: packageJson.dependencies[key]
                                ? 'direct'
                                : packageJson.peerDependencies[key] && optionalDependencies.includes(key)
                                    ? 'optional'
                                    : 'required',
                        },
                    }), {});

                return {
                    name: packageJson.name,
                    description: packageJson.description,
                    version: packageJson.version,
                    engines: packageJson.engines,
                    compatibility,
                };
            }),
        }));
    }
}

export default new PackageJsonParser([
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
], {
    'Core Modules': {
        description: `
[Serenity/JS core modules](/handbook/design/) form the foundation of the Serenity/JS framework,
providing essential functionality such as the Screenplay Pattern for structuring your automated tests,
reporting infrastructure for capturing the activities of your actors and processing test results,
and assertion libraries for verifying test outcomes.

For practical examples of writing different kinds of automated tests using Serenity/JS,
check out the [Serenity/JS Project Templates](/handbook/project-templates/).        
        `,
        items: [
            '@serenity-js/core',
            '@serenity-js/assertions',
        ],
    },
    'Web Testing': {
        description: `
[Serenity/JS web modules](/handbook/web-testing/) offer a **standardised abstraction layer** on top of popular web integration tools,
enabling you to write **portable web automation code** that follows the Screenplay Pattern
and works just as well for end-to-end test scenarios as for UI component tests.

For practical examples of writing web-based tests using Serenity/JS,
check out the [Serenity/JS Project Templates for web testing](/handbook/project-templates/#web-testing)
and the [Serenity/JS web testing tutorial](/handbook/tutorials/your-first-web-scenario/).
        `,
        items: [
            '@serenity-js/web',
            '@serenity-js/playwright',
            '@serenity-js/protractor',
            '@serenity-js/webdriverio',
            '@serenity-js/webdriverio-8',
        ],
    },
    'REST API Testing': {
        description: `
[Serenity/JS REST modules](/handbook/api-testing/) enable you to automate interactions with REST and other HTTP-based APIs,
either as part of dedicated API test suites, or as part of web-based test scenarios.

For practical examples of writing API-based tests using Serenity/JS,
check out the [Serenity/JS Project Templates for API testing](/handbook/project-templates/#resthttp-api-testing)
and the [Serenity/JS API testing tutorial](/handbook/tutorials/your-first-api-scenario/).
        `,
        items: [
            '@serenity-js/rest',
            '@serenity-js/local-server',
        ],
    },
    'Reporting': {
        description: `
[Serenity/JS reporting modules](/handbook/reporting/) capture information about the activities performed by your actors
during a test scenario and translate it into test reports and living documentation of your system.
        `,
        items: [
            '@serenity-js/console-reporter',
            '@serenity-js/serenity-bdd',
        ],
    },
    'Test Runners': {
        description: `
[Serenity/JS test runner adapters](/handbook/test-runners/) enable you to execute your Serenity/JS test scenarios
using popular test runners and integrate them with [Serenity/JS reporting services](/handbook/reporting).
        `,
        items: [
            '@serenity-js/cucumber',
            '@serenity-js/jasmine',
            '@serenity-js/mocha',
            '@serenity-js/playwright-test',
        ],
    },
});
