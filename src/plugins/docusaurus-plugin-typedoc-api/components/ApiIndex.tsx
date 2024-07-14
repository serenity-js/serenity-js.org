import { useEffect } from 'react';
import Link from '@docusaurus/Link';
import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import type { GlobalVersion } from '@docusaurus/plugin-content-docs/client';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import type { Props as DocItemProps } from '@theme/DocItem';
import Heading from '@theme/Heading';
import type { ApiOptions, PackageReflectionGroup } from 'docusaurus-plugin-typedoc-api/lib/types';
import { Footer } from 'docusaurus-plugin-typedoc-api/lib/components/Footer'
import { VersionBanner } from 'docusaurus-plugin-typedoc-api/lib/components/VersionBanner';
import NpmIcon from './NpmIcon';
import NpmLink from './NpmLink';

import { PackageCategory } from '../types';

export interface ApiIndexProps extends Pick<DocItemProps, 'route'> {
    history: {
        location: { pathname: string };
        replace: (path: string) => void;
    };
    options: ApiOptions;
    packages: PackageReflectionGroup[];
    categories: Array<PackageCategory>;
}

function addVersionToUrl(
    url: string,
    latestVersion: PropVersionMetadata,
    preferredVersion: GlobalVersion | null | undefined,
) {
    if (
        !url.match(/api\/([\d.]+)/) &&
        !url.includes('api/next') &&
        preferredVersion &&
        preferredVersion.name !== latestVersion.version
    ) {
        const version = preferredVersion.name === 'current' ? 'next' : preferredVersion.name;

        if (url.endsWith('/api')) {
            return `${ url }/${ version }`;
        }

        return url.replace('/api/', `/api/${ version }/`);
    }

    return url;
}

export default function ApiIndex({ options, packages, categories, history }: ApiIndexProps) {
    const latestVersion = useDocsVersion();
    const { preferredVersion } = useDocsPreferredVersion(latestVersion.pluginId);

    useEffect(() => {
        // Redirect to package when only 1
        if (packages.length === 1) {
            history.replace(
                addVersionToUrl(
                    packages[0].entryPoints[0].reflection.permalink,
                    latestVersion,
                    preferredVersion,
                ),
            );

            // Redirect to preferred version
        } else if (preferredVersion) {
            history.replace(addVersionToUrl(history.location.pathname, latestVersion, preferredVersion));
        }
    }, [ packages, history, latestVersion, preferredVersion ]);

    return (
        <div className="row">
            <div className="col apiItemCol">
                { options.banner && (
                    <div className="alert alert--info margin-bottom--md" role="alert">
                        {/* eslint-disable-next-line react/no-danger, react-perf/jsx-no-new-object-as-prop */ }
                        <div dangerouslySetInnerHTML={ { __html: options.banner } }/>
                    </div>
                ) }

                <VersionBanner/>

                <div className="apiItemContainer">
                    <article>
                        <div className="markdown">
                            <header>
                                <Heading as="h1">Serenity/JS API</Heading>
                            </header>

                            <section className="tsd-readme">
                                <p>
                                    Serenity/JS is a <strong>modular</strong>, <strong>full-stack acceptance testing framework</strong> based on Node.js.
                                    The official Serenity/JS Node modules are listed below and distributed via <a href="https://www.npmjs.com/">NPM</a> under
                                    the <a href="https://www.npmjs.com/search?q=%40serenity-js"><code>@serenity-js/*</code> namespace</a>.
                                </p>
                                <p>
                                    You can use as many or as few Serenity/JS modules as you need
                                    to improve the reporting capabilities of your test suite,
                                    integrate with the various interfaces of your system under test,
                                    and introduce advanced code reuse patterns in your organisation.
                                </p>
                                <p>
                                    Learn more about the <a href="/handbook/getting-started/architecture/">modular architecture of Serenity/JS</a>.
                                </p>
                            </section>

                            <section>
                                { categories.map(category => (
                                    <div className="tsd-panel-group" key={ category.label }>
                                        <h2>{ category.label }</h2>
                                        {/* eslint-disable-next-line react/no-danger, react-perf/jsx-no-new-object-as-prop */}
                                        <div dangerouslySetInnerHTML={{ __html: category.description }} />
                                        { category.items.map(item => (
                                            <div className="tsd-panel" key={ item.label }>
                                                <h3 className="tsd-panel-header">
                                                    <Link to={ item.permalink }>
                                                        { item.label }
                                                    </Link>
                                                    <span className="tsd-flag"
                                                          title={ 'current version' }>{ item.version }</span>
                                                    <NpmIcon packageName={ item.name }/>
                                                </h3>
                                                <div className="tsd-panel-content">
                                                <p>{ item.description }</p>
                                                </div>
                                                { Object.keys(item.compatibility).length > 0 && (
                                                    <div className="tsd-panel-content">
                                                        <h4>Compatible with:</h4>
                                                        <ul className={'tsd-signatures'}>
                                                            { Object.entries(item.compatibility).map(([ dependencyName, compatibleVersions ]) => (
                                                                <li key={ dependencyName }>
                                                                    <NpmLink packageName={ dependencyName } />

                                                                    <span className="tsd-flag"
                                                                          title={ 'compatible versions' }>{ compatibleVersions }</span>
                                                                </li>
                                                            )) }
                                                        </ul>
                                                    </div>
                                                ) }
                                            </div>
                                        )) }
                                    </div>
                                )) }
                            </section>

                            {/*<section className="tsd-panel">*/}
                            {/*    <h3 className="tsd-panel-header">Packages</h3>*/}
                            {/*    <div className="tsd-panel-content">*/}
                            {/*        <ul className="tsd-index-list">*/}
                            {/*            { packages.map((pkg) => (*/}
                            {/*                <li key={ pkg.packageName } className="tsd-truncate">*/}
                            {/*                    <Link*/}
                            {/*                        className="tsd-kind-icon"*/}
                            {/*                        // to={pkg.entryPoints[0].reflection.permalink}*/}
                            {/*                        // todo: submit fix to redirect to the index page of each package*/}
                            {/*                        to={ pkg.entryPoints.find(entryPoint => entryPoint.index).reflection.permalink }*/}
                            {/*                    >*/}
                            {/*                        <span*/}
                            {/*                            className="tsd-signature-symbol">v{ pkg.packageVersion }</span>{ ' ' }*/}
                            {/*                        <span>{ removeScopes(pkg.packageName, options.scopes) }</span>*/}
                            {/*                    </Link>*/}
                            {/*                </li>*/}
                            {/*            )) }*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</section>*/}
                        </div>

                        <Footer/>
                    </article>
                </div>
            </div>
        </div>
    );
}
