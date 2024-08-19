import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

import Home from '@site/src/components/Home';

export default function Index(): React.JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const { description } = siteConfig.customFields as { description: string };
    return (
        <Layout title={ siteConfig.title } description={ description }
                wrapperClassName="homepage">
            <Head>
                <title>Serenity/JS - Collaborative test automation at any scale</title>
                <meta
                    property="og:title"
                    content="Serenity/JS - Collaborative test automation at any scale"
                />
                <meta
                    property="twitter:title"
                    content="Serenity/JS - Collaborative test automation at any scale"
                />
            </Head>
            <Home />
        </Layout>
    );
}

