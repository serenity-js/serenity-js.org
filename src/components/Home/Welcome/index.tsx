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
                <h2 className={ styles.title }>Welcome to the Serenity/JS Community!</h2>
                <CallToAction>
                    <Link id="cta-welcome-start-automating"
                          className={ clsx('button', 'button--primary', styles.primaryButton) }
                          to="/handbook/">
                        <Translate>Get started 🚀</Translate>
                    </Link>
                </CallToAction>
            </div>
        </div>
    );
}
