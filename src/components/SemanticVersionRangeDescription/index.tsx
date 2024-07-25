import React from 'react';
import clsx from 'clsx';

export interface SemanticVersionRangeDescriptionProps {
    range: string;
    className?: string;
}

export default function SemanticVersionRangeDescription({ range, className }: SemanticVersionRangeDescriptionProps): React.JSX.Element {
    const title = {
        '^': `${ range.slice(1) } or any newer patch or minor version`,
        '~': `${ range.slice(1) } or any newer patch version`,
    }[range.charAt(0)] ?? `Version ${ range } exactly`;

    return (
        <code
            className={ clsx(className) }
            title={title}
            aria-label={ title }
        >
            { range }
        </code>
    )
}
