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
                title="Add Serenity/JS to your project"
                description={
                    <>
                        Serenity/JS works with your existing tools and infrastructure
                        and supports progressive adoption without disrupting your current workflow.
                        Integrates with <a href="/handbook/integration/">GitHub Actions, Jenkins, GitLab CI, and more</a>.
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
                                leverage Serenity/JS integration libraries and
                                write end-to-end and component tests.
                            </p>
                            <p className={ styles.cardActions }>
                                <Link id="cta-homepage-playwright-test"
                                      data-sa-link-event="cta_homepage_playwright"
                                      to="/getting-started/playwright/">
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
                                      data-sa-link-event="cta_homepage_webdriverio"
                                      to="/getting-started/webdriverio/">
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
                                Test Electron desktop apps
                            </h4>
                            <p>
                                Test your Electron applications using the same Screenplay Pattern APIs
                                as web testing — with structured reporting, reusable interactions,
                                and automatic app lifecycle management.
                            </p>
                            <p className={ styles.cardActions }>
                                <Link id="cta-homepage-electron"
                                      data-sa-link-event="cta_homepage_electron"
                                      to="/getting-started/electron/">
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
