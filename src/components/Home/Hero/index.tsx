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
                                    `Enable <b>collaborative<br /> test automation</b><br /> at <b>any scale</b>!`,
                                description:
                                    'Home page hero title, can contain simple html tags',
                            }),
                        } }
                    />
                </h1>
                <p>
                    <strong>Serenity/JS</strong> gives your <strong>Playwright</strong>, <strong>WebdriverIO</strong>,
                    or <strong>Cucumber</strong> test suite the architecture it needs to
                    scale — <strong>meaningful reports</strong> for every audience,
                    and <strong>reusable test code</strong> to support your entire organisation.
                </p>
                <CallToAction>
                    <Link id="cta-start-automating" className="button button--primary"
                          data-sa-link-event="cta_hero_start_automating"
                          to="/getting-started/">
                        <Translate>Start automating 🚀</Translate>
                    </Link>
                    <span className={ styles.indexCtasGitHubButtonWrapper }>
                        <iframe
                            className={ styles.indexCtasGitHubButton }
                            src="https://ghbtns.com/github-btn.html?user=serenity-js&amp;repo=serenity-js&amp;type=star&amp;count=true&amp;size=large"
                            width={ 160 }
                            height={ 30 }
                            title="GitHub Stars"
                        />
                    </span>
                </CallToAction>
            </div>
        </div>
    );
}
