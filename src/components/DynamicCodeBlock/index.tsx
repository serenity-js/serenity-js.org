import React, { useEffect, useRef, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

/**
 * Usage example:
 *
 * ```mdx
 * <DynamicCodeBlock
 *   lang="bash"
 *   title="Install from the command line"
 *   highlight="1"
 * >
 * {`docker pull ghcr.io/serenity-js/playwright:v`}<PlaywrightVersion />{`-noble`}
 * </DynamicCodeBlock>
 * ```
 *
 * @param children
 * @param lang
 * @param title
 * @param highlight
 * @constructor
 */
export default function DynamicCodeBlock({ children, lang, title, highlight }) {
    const tempRef = useRef(null);
    const [ plainText, setPlainText ] = useState('');

    useEffect(() => {
        if (tempRef.current) {
            // Extract innerText after slight delay to ensure children fully rendered
            const timer = setTimeout(() => {
                setPlainText(tempRef.current.innerText || '');
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [ children ]);

    const metastring = highlight ? `{${ highlight }}` : '';

    return (
        <>
            {/* Offscreen positioned container to render and extract text */ }
            <div
                ref={ tempRef }
                style={ {
                    position: 'absolute',
                    left: -9999,
                    top: 0,
                    whiteSpace: 'pre-wrap',
                    pointerEvents: 'none',
                    userSelect: 'text',
                    height: 0,
                    overflow: 'hidden',
                } }
                aria-hidden="true"
            >
                { children }
            </div>

            {/* Render the extracted plainText in CodeBlock */ }
            <CodeBlock
                className={ lang ? `language-${ lang }` : undefined }
                title={ title }
                metastring={ metastring }
            >
                { plainText }
            </CodeBlock>
        </>
    );
}
