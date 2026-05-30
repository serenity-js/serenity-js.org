import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './styles.module.css';

export interface BookPromoProps {
    className?: string;
}

export default function BookPromo({ className }: BookPromoProps): React.JSX.Element {
    return (
        <div className={clsx(styles.wrapper, className)}>
            <div className={clsx('container', styles.container)}>
                <div className={styles.content}>
                    <div className={styles.bookCover}>
                        <Link
                            to="https://www.manning.com/books/bdd-in-action-second-edition"
                            data-sa-link-event="cta_book_cover"
                        >
                            <img
                                src="/images/books/bdd-in-action-2nd-edition.png"
                                alt="BDD in Action, Second Edition book cover"
                                width={200}
                            />
                        </Link>
                    </div>
                    <div className={styles.bookDetails}>
                        <h2 className={styles.title}>The book behind the framework</h2>
                        <p className={styles.description}>
                            Learn the layered test architecture behind Serenity/JS, the Screenplay Pattern,
                            and how to design test automation systems that scale across teams and projects.
                        </p>
                        <p className={styles.authors}>
                            By John Ferguson Smart and Jan Molak
                        </p>
                        <Link
                            className="button button--primary"
                            to="https://www.manning.com/books/bdd-in-action-second-edition"
                            data-sa-link-event="cta_book_buy"
                        >
                            Get the book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
