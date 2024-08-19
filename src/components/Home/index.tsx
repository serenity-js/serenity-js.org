import clsx from 'clsx';
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import { Recommendations } from './Recommendations';

import styles from './index.module.css';
import Welcome   from './Welcome';

export default function Home(): React.JSX.Element {
    return (
        <>
            <Hero />
            <main>
                <Features className={clsx(styles.section, styles.section)} />
                <Recommendations className={clsx(styles.section, styles.sectionAlt)} />
                <Welcome />
            </main>
        </>
    )
}
