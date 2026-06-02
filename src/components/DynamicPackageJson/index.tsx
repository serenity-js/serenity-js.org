import React from 'react';
import { usePluginData } from '@docusaurus/core/lib/client/exports/useGlobalData';
import CodeBlock from '@theme/CodeBlock';

export interface DynamicPackageJsonProps {
    /** Project name for the package.json */
    name?: string;
    /** Scripts to include */
    scripts?: Record<string, string>;
    /** dependencies to include (e.g. [ '@serenity-js/core', [ 'rimraf', '6.x'] ]) */
    dependencies?: Array<[string, string] | string>;
    /** devDependencies with their version ranges (e.g. [ ['@playwright/test', '^1.52.0'] ] ) */
    devDependencies?: Array<[string, string] | string>;
}

function createAddVersions({packages, integrations}: {
    packages: Record<string, string>,
    integrations: Record<string, string>
}) {
    return function addVersions(dependencies: Array<[string, string] | string>): Record<string, string> {
        const result: Record<string, string> = {};

        for (const dependency of dependencies) {
            if (Array.isArray(dependency)) {
                const [name, version] = dependency;
                result[name] = `${version}`;
            }
            else {
                const name = dependency;
                result[name] = (packages[name] && `^${packages[name]}`) ||
                    integrations[name]?.split('||').pop().trim() ||
                    'latest';
            }
        }

        return result;
    }
}


export default function DynamicPackageJson({
                                               name = 'my-serenity-js-project',
                                               scripts = {},
                                               dependencies = [],
                                               devDependencies = [],
                                           }: DynamicPackageJsonProps) {

    const addVersions = createAddVersions(usePluginData('docusaurus-plugin-serenity-js-presets') as {
        integrations: Record<string, string>;
        packages: Record<string, string>;
    });

    const packageJsonDependencies = addVersions(dependencies);
    const packageJsonDevDependencies = addVersions(devDependencies);

    const packageJson = {
        name,
        version: '1.0.0',
        scripts,
    };

    if (Object.keys(packageJsonDependencies).length) {
        packageJson['dependencies'] = packageJsonDependencies;
    }

    if (Object.keys(packageJsonDevDependencies).length) {
        packageJson['devDependencies'] = packageJsonDevDependencies;
    }

    const content = JSON.stringify(packageJson, null, 2);

    return (
        <CodeBlock language="json" title="package.json">
            {content}
        </CodeBlock>
    );
}
