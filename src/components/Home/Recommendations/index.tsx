import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import clsx from 'clsx';
import React from 'react';

import { LeaderRecommendations } from './data/recommendations';
import styles from './index.module.css';
import Recommendation from '../Recommendation';

export interface SectionProps {
    className?: string;
}

export default function Recommendations({ className }: SectionProps) {

    const columns = LeaderRecommendations.reduce((acc, recommendation, i) => {
        acc[i % 2].push(recommendation);
        return acc;
    }, [[], []]);

    return (
        <Section className={ className }>
            <SectionTitle
                title="Recommended by Open-Source Leaders"
                description={
                    <>
                        The Serenity/JS team works closely with other leading open-source projects
                        to ensures seamless integration of our frameworks and tools.
                    </>
                }
            />
            <div className={ clsx('row', styles.recommendationsRow) }>
                { columns.map((recommendationItems, i) => (
                    <div className="col col--6" key={ i }>
                        { recommendationItems.map((recommendation) => (
                            <Recommendation { ...recommendation } key={recommendation.author.name} />
                        )) }
                    </div>
                )) }
            </div>
        </Section>
    );
}
