import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

import CallToAction from '../CallToAction';

import styles from './styles.module.css';

export default function Hero(): React.JSX.Element {
    return (
        <div className={ styles.hero } data-theme="dark">
            <div className={ styles.heroInner }>
                <h1 className={ styles.heroProjectTagline }>
                    <img
                        alt={ translate({ message: 'Serenity/JS logo' }) }
                        className={ styles.heroLogo }
                        src={ useBaseUrl('/images/serenity-js-avatar.png') }
                        width="300"
                        height="300"
                    />
                    <span
                        className={ styles.heroTitleTextHtml }
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={ {
                            __html: translate({
                                id: 'homepage.hero.title',
                                message:
                                    `<b>Test automation</b><br /> that <b>scales across</b><br /> your <b>teams</b>`,
                                description:
                                    'Home page hero title, can contain simple html tags',
                            }),
                        } }
                    />
                </h1>
                <p>
                    <strong>Serenity/JS</strong> is a <strong>TypeScript-native</strong> framework that gives
                    your <strong>Playwright Test</strong>, <strong>WebdriverIO</strong>,
                    or <strong>Cucumber</strong> test suite the architecture it needs to
                    scale — <strong>meaningful reports</strong> for every audience,
                    and <strong>reusable test code</strong> to support your entire organisation.
                </p>
                <p className={ styles.heroMeta }>
                    Apache-2.0 licensed · Commercial support available · Works with your existing tools and CI/CD infrastructure
                </p>
                <CallToAction>
                    <Link id="cta-start-automating" className="button button--primary"
                          data-sa-link-event="cta_hero_start_automating"
                          to="/getting-started/">
                        <Translate>Start automating 🚀</Translate>
                    </Link>
                </CallToAction>
            </div>
        </div>
    );
}
