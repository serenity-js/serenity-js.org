import clsx from 'clsx';
import React from 'react';

import Features from './Features';
import Hero from './Hero';
import Integrations from './Integrations';
import Recommendations from './Recommendations';
import Welcome  from './Welcome';

import styles from './index.module.css';
import TopBanner from './TopBanner';

export default function Home(): React.JSX.Element {
    return (
        <>
            <TopBanner />
            <Hero />
            <main>
                <Features className={clsx(styles.section)} />
                <Recommendations className={clsx(styles.section, styles.sectionAlt)} />
                <Integrations className={clsx(styles.section)} />
                <Welcome className={clsx(styles.section, styles.sectionAlt)} />
            </main>
        </>
    )
}
