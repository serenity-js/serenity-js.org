import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export interface SectionProps {
    className?: string;
    children?: React.JSX.Element | React.JSX.Element[];
}

export default function Section({ className, children }: SectionProps): React.JSX.Element {
    return (
        <section className={ className }>
            <div className="container">{ children }</div>
        {/*<section className={ clsx(styles.wrapper, className) }>*/}
        {/*    <div className={ clsx('container', styles.container) }>{ children }</div>*/}
        </section>
    );
}
