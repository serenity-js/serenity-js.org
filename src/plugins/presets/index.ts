import type { LoadContext, OptionValidationContext } from '@docusaurus/types';

import { Joi } from '@docusaurus/utils-validation';
import logger from '@docusaurus/logger';
import fs from 'fs-extra';
import glob from 'fast-glob';
import path from 'path';

export interface PluginOptions {
    projectRoot: string;
    include: string[];
    integrationsOfInterest: string[];
    caching: {
        enabled: boolean;
        duration: number;
    };
    sampling: {
        enabled: boolean;
        rate: number;
    };
}

export default async function pluginPresets(
    context: LoadContext,
    options: PluginOptions,
) {

    const { projectRoot, include, caching, sampling } = options;

    const pathToRootPackageJson = path.join(projectRoot, 'package.json');
    const rootPackageJson = JSON.parse(fs.readFileSync(pathToRootPackageJson).toString('utf8'));

    const input = include.map(pattern =>
        path.join(projectRoot, pattern, `package.json`)
    );

    return {
        name: 'docusaurus-plugin-serenity-js-presets',

        async postBuild({ siteConfig, routesPaths, outDir, head }) {

            // module-manager preset
            const paths = await glob(input, { onlyFiles: false, globstar: true, absolute: true });

            const packages = {};
            let integrations = {};

            for (const pathToPackageJSON of paths) {
                const serenityPackage = JSON.parse(fs.readFileSync(pathToPackageJSON).toString('utf8'));

                const dependencies = {
                    ...serenityPackage.dependencies,
                    ...serenityPackage.peerDependencies,
                };

                const packageIntegrations = Object.keys(dependencies)
                    .filter(dependency => options.integrationsOfInterest.includes(dependency))
                    .reduce((acc, key) => {
                        acc[key] = dependencies[key];
                        return acc;
                    }, {});

                integrations = {
                    ...integrations,
                    ...packageIntegrations,
                }

                packages[serenityPackage.name] = serenityPackage.version;
            }

            try {
                const content = JSON.stringify({
                    engines: rootPackageJson.engines,
                    packages,
                    integrations,
                    caching,
                    sampling,
                    updatedAt: new Date().toISOString(),
                }, undefined, 0);

                const pathToInfoFile = path.join(outDir, 'presets/v3/module-manager.json');
                await fs.outputFile(pathToInfoFile, content);

                logger.info`Wrote presets/v3/module-manager.json`;
            }
            catch (err) {
                logger.error`Writing presets/v3/module-manager.json failed: ${ err.message || err }`;

                throw err;
            }
        }
    };
}

export function validateOptions({ validate, options }: OptionValidationContext<PluginOptions, PluginOptions>): PluginOptions {
    const pluginOptionsSchema = Joi.object<PluginOptions>({
        projectRoot: Joi.string().required(),
        include: Joi.array().items(Joi.string()).default([]),
        caching: Joi.object({
            enabled: Joi.boolean().default(true),
            duration: Joi.number().default(60 * 60 * 1000),
        }).default({}),
        sampling: Joi.object({
            enabled: Joi.boolean().default(true),
            rate: Joi.number().default(1),
        }).default({}),
    }).unknown();

    return validate(pluginOptionsSchema, options);
}
