import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import styles from './styles.module.css';

export interface IntegrationsProps {
    className?: string;
}

export default function Integrations({ className }: IntegrationsProps): React.JSX.Element {

    return (
        <Section className={ clsx(className) }>
            <SectionTitle
                title="Designed to support Continuous Improvement"
                description={
                    <>
                        Serenity/JS is designed to work well with your existing tools and infrastructure
                        and supports progressive modernisation and continuous improvement of existing codebases.
                    </>
                }
            />
            <div className={ clsx('row') }>
                <div className="col col--4">
                    <div className={ clsx('card') }>
                        <div className={ clsx('card__body') }>
                            <h4 className={ styles.cardTitle }>
                                Enhance Playwright Test automation
                            </h4>
                            <p>
                                Add Serenity/JS to your new or existing Playwright Test project
                                to introduce portable test APIs, business-friendly reporting,
                                and leverage Serenity/JS integration libraries
                                to write end-to-end and component tests.
                            </p>
                            <p className={ styles.cardActions }>
                                <Link id="cta-homepage-playwright-test"
                                      to="/handbook/getting-started/serenity-js-with-playwright-test/">
                                    Learn more
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col--4">
                    <div className={ clsx('card') }>
                        <div className={ clsx('card__body') }>
                            <h4 className={ styles.cardTitle }>
                                Enhance WebdriverIO automation
                            </h4>
                            <p>
                                Add Serenity/JS to your WebdriverIO project to introduce better reporting,
                                reusable test APIs, and make your end-to-end and mobile tests easier to maintain,
                                no matter whether you're using Cucumber.js, Jasmine, or Mocha.
                            </p>
                            <p className={ styles.cardActions }>
                                <Link id="cta-homepage-webdirverio"
                                      to="/handbook/test-runners/webdriverio/">
                                    Learn more
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col--4">
                    <div className={ clsx('card') }>
                        <div className={ clsx('card__body') }>
                            <h4 className={ styles.cardTitle }>
                                Migrate from Protractor
                            </h4>
                            <p>
                                Transition from Protractor to modern frameworks like Playwright Test or WebdriverIO,
                                leveraging Serenity/JS portable web APIs for smooth migration, enhanced reporting,
                                and reusable test automation patterns.
                            </p>
                            <p className={ styles.cardActions }>
                                <Link id="cta-homepage-protractor"
                                      to="/handbook/getting-started/serenity-js-with-protractor/">
                                    Learn more
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
