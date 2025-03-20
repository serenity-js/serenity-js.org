import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';
import React from 'react';

export default function TopBanner(): React.JSX.Element {
    const banner = useDocusaurusContext().siteConfig.customFields?.banner as { text: string, link: string };

    return banner && (
        <div className={styles.topBanner}>
            <div className={styles.topBannerTitle}>
                {'🎉\xa0'}
                <Link
                    id="top-banner-link"
                    to={ banner.link }
                    className={styles.topBannerTitleText}>
                    { banner.text }
                </Link>
                {'\xa0🥳'}
            </div>
        </div>
    );
}
