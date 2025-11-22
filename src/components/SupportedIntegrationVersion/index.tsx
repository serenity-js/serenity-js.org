import React from 'react'
import { usePluginData } from '@docusaurus/core/lib/client/exports/useGlobalData';

export interface SupportedIntegrationVersionProps {
    format?: 'exact' | 'original';
    name?: string;
}

export default function SupportedIntegrationVersion({ format = 'original', name }: SupportedIntegrationVersionProps) {

    const pluginData = usePluginData('docusaurus-plugin-serenity-js-presets') as {
        integrationsOfInterest?: string[];
        integrations?: Record<string, string>;
        packages?: Record<string, string>;
    };

    // const integrationsOfInterest = pluginData?.integrationsOfInterest || [];
    const integrations = pluginData?.integrations || {};

    if (! name) {
        console.warn('SupportedIntegrationVersion: name prop is required when format="version"');
        return <span>N/A</span>;
    }
    const originalVersion = integrations[name];
    if (! originalVersion) {
        return <span>N/A</span>;
    }

    if (format === 'exact') {
        // Extract the version number from the range (e.g., "^1.56.1" -> "1.56.1")
        const versionMatch = originalVersion.match(/[\d.]+/);
        return <span>{ versionMatch ? versionMatch[0] : originalVersion }</span>;
    }

    return <span>{ originalVersion }</span>;
}

