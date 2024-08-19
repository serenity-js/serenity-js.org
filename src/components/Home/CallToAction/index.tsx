import React from 'react';

import styles from './styles.module.css';

export interface CallToActionProps {
    children?: React.JSX.Element | React.JSX.Element[];
}

export default function CallToAction({ children }: CallToActionProps) {
    return (
        <div className={ styles.indexCtas }>
            { children }
        </div>
    )
}
