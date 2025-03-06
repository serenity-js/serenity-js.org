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
                    <strong>Jan Molak</strong> is a software development consultant and trainer with over <strong>{ experience } years of experience</strong> helping
                    teams <strong>turn ideas into high-quality software</strong>. From <a href={ 'https://www.mobygames.com/person/292010/jan-molak/' } target={ '_blank' }>award-winning video games</a> to
                    high-traffic web apps, complex event processing, and financial systems,
                    Jan has worked across multiple industries to boost efficiency, reduce risks, and accelerate delivery - leading to better business results and happier customers.
                </p>
                <p>
                    As the <strong>creator of Serenity/JS</strong>, <strong>co-author of <em><a href={ 'https://www.manning.com/books/bdd-in-action-second-edition' } target={ '_blank' }>BDD in Action, Second Edition</a></em></strong>,
                    and a key contributor to the <strong>Screenplay Pattern</strong>, Jan specialises in <strong>Behaviour-Driven Development (BDD)</strong>, <strong>test automation</strong> and <strong>continuous delivery</strong>.
                    His mission? Helping teams collaborate better, catch issues earlier, and build software that truly meets business needs.
                </p>
                <p>
                    🚀 <strong>Want to deliver better software, sooner?</strong> <a href={ 'https://linkedin.com/in/janmolak' } target={ '_blank' }><strong>Connect with Jan on LinkedIn</strong></a>!
                </p>
            </div>
        </footer>
    )
}
