import React from 'react';
import clsx from 'clsx';

export default function DependencyTypeDescription({ type, format = descriptionTypeName => descriptionTypeName, className }: {
    type: 'optional' | 'required' | 'direct',
    format: (descriptionTypeName: string) => string,
    className?: string
}) {
    const title = {
        required: 'You MUST install a compatible version of this dependency in your project package.json',
        optional: 'You SHOULD install a compatible version of at least one of the available optional dependencies in your project package.json',
        direct: 'A compatible version of this dependency already comes with this module, but you COULD install it directly in your project package.json too',
    }[type];

    return (
        <span className={ clsx(className) } aria-lable={ title } title={ title }>{ format(type) }</span>
    )
}
