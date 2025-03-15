import React from 'react'

import Image, { SrcImage } from '@theme/IdealImage';

export interface FigureProps {
    img: { default: string } | { src: SrcImage; preSrc: string} | string;
    caption: string;
    externalLink: string;
}

export default function Figure({ img, caption, externalLink }: FigureProps) {

    const figcaption = externalLink
        ? <figcaption><em>{caption} (<a href={ externalLink } target="_blank" rel="noopener noreferrer">source</a>)</em></figcaption>
        : <figcaption><em>{caption}</em></figcaption>;

    return (
        <figure>
            <Image img={img} alt={caption} />
            {figcaption}
        </figure>
    )
}
