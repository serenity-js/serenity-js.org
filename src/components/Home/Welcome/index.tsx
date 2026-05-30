import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

import styles from './styles.module.css';
import CallToAction from '../CallToAction';

export interface WelcomeProps {
    className?: string;
}

export default function Welcome({ className }: WelcomeProps) {
    return (
        <div className={ clsx(styles.wrapper, className) }>
            <div className={ styles.background }/>
            <div className={ styles.container }>
                <img
                    alt={ translate({ message: 'Serenity/JS logo' }) }
                    className={ styles.heroLogo }
                    src={ useBaseUrl('/images/serenity-js-avatar.png') }
                    width="300"
                    height="300"
                />
                <h2 className={ styles.title }>Ready to try Serenity/JS?</h2>
                <CallToAction>
                    <Link id="cta-welcome-get-started"
                          className={ clsx('button', 'button--primary', styles.primaryButton) }
                          data-sa-link-event="cta_welcome_get_started"
                          to="/getting-started/">
                        <Translate>Get started 🚀</Translate>
                    </Link>
                </CallToAction>
            </div>
        </div>
    );
}
