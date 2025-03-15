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
                    <strong>Serenity/JS</strong> is an innovative <strong>test automation framework</strong> designed to
                    help you
                    create <strong>high-quality, business-focused test scenarios</strong> that interact with <strong>any
                    interface of your system</strong> and
                    produce <strong>comprehensive test reports</strong> that <strong>build trust</strong> between
                    delivery teams and the business.
                </p>
                <CallToAction>
                    <Link id="cta-start-automating" className="button button--primary"
                          to="/handbook/tutorials/your-first-web-scenario">
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
