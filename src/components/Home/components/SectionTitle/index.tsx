import React from 'react';

import styles from './styles.module.css';

export interface SectionTitleProps {
    title: React.JSX.Element | string;
    description: React.JSX.Element | string;
}

export default function SectionTitle({ title, description }: SectionTitleProps): React.JSX.Element {
    return (
        <div className={ styles.container }>
            <h1 className={ styles.title }>{ title }</h1>
            <p className={ styles.description }>{ description }</p>
        </div>
    );
}
