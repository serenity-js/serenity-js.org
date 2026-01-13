import { Joi } from '@docusaurus/utils-validation';
import type { LoadContext, OptionValidationContext } from '@docusaurus/types';

export interface PluginOptions {
    enabled: boolean;
}

export default async function pluginSimpleAnalytics(
    context: LoadContext,
    options: PluginOptions,
) {
    const { enabled } = options;

    const scriptDomain = 'scripts.simpleanalyticscdn.com';
    const noScriptDomain = 'queue.simpleanalyticscdn.com';

    return {
        name: 'docusaurus-plugin-simple-analytics',

        injectHtmlTags() {
            if (! enabled) {
                return {};
            }

            return {
                postBodyTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            async: true,
                            defer: true,
                            'data-collect-dnt': 'true',
                            src: `https://${ scriptDomain }/latest.js`,
                        },
                    },
                    {
                        tagName: 'noscript',
                        innerHTML: `<img src="https://${ noScriptDomain }/noscript.gif?collect-dnt=true" alt="" referrerpolicy="no-referrer-when-downgrade" />`,
                    },
                ],
            };
        },
    };
}

export function validateOptions({ validate, options }: OptionValidationContext<PluginOptions, PluginOptions>): PluginOptions {
    const pluginOptionsSchema = Joi.object({
        enabled: Joi.boolean().default(false),
    });

    return validate(pluginOptionsSchema, options);
}
