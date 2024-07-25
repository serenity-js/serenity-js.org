import React from 'react';
import clsx from 'clsx';

export default function DependencyTypeDescription({ type, format = descriptionTypeName => descriptionTypeName, className }: {
    type: 'optional' | 'required' | 'direct',
    format: (descriptionTypeName: string) => string,
    className?: string
}) {
    const title = {
        required: 'You MUST install a compatible version of this dependency in your package.json file',
        optional: 'You SHOULD install a compatible version of at least one of the available optional dependencies in your package.json file',
        direct: 'A compatible version of this dependency will be installed together with the corresponding Serenity/JS module, but you COULD also add it in your package.json file',
    }[type];

    return (
        <span className={ clsx(className) } aria-label={ title } title={ title }>{ format(type) }</span>
    )
}
