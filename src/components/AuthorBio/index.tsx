import React from 'react'
import Image from '@theme/IdealImage';

import styles from './styles.module.css';

function differenceInYears(start: Date, end: Date) {
    const differenceInMilliseconds = Math.abs(end.getTime() - start.getTime());
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    return Math.floor(differenceInMilliseconds / millisecondsInYear);
}

const experience = differenceInYears(new Date('2006-03-01'), new Date());

export default function AuthorBio() {

    return (
        <footer className={ styles.authorBio }>
            <Image img={ require('@site/static/images/jan-molak.png') } width={ 200 } alt="Jan Molak" style={{overflow: 'hidden'}}  />
            <div>
                <p>
                    <strong>Jan Molak</strong> is an independent software development consultant and trainer
                    with over { experience } years of experience helping teams bridge the gap between business and
                    technology.
                    From <a href={ 'https://www.mobygames.com/person/292010/jan-molak/' } target={ '_blank' }>award-winning video games</a> to
                    high-traffic web apps, complex event processing, and financial systems,
                    Jan has worked across multiple industries to reduce risks, improve software quality, and accelerate delivery,
                    ensuring better business outcomes and happier customers.
                </p>
                <p>
                    As the creator of Serenity/JS, co-author of <a
                    href={ 'https://www.manning.com/books/bdd-in-action-second-edition' } target={ '_blank' }>"BDD in Action, Second Edition"</a>,
                    and a contributor to the <a href={ '/handbook/design/screenplay-pattern/' }>Screenplay Pattern</a>,
                    Jan helps teams adopt Behaviour-Driven Development and test automation to improve collaboration, reduce production incidents, and ensure software meets business needs.
                </p>
                <p>
                    💬 <a href={ 'https://linkedin.com/in/janmolak' } target={ '_blank' }><strong>Connect with Jan on LinkedIn</strong></a> to
                    discuss how aligning business and technology can drive better software, faster delivery, and real impact!
                </p>
            </div>
        </footer>
    )
}
