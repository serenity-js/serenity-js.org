import Link from '@docusaurus/Link';
import React from 'react';

export interface NpmLinkProps {
    packageName: string;
}

export default function npmLink({ packageName }: NpmLinkProps): React.JSX.Element {
    return (
        <Link
            className="tsd-kind-icon"
            href={ `https://npmjs.com/package/${ packageName }` }
            rel="noreferrer"
            target="_blank"
            title={ `See ${ packageName } on npmjs.com` }
        >
            <i className="codicon codicon-package"/>
            { packageName }
        </Link>
    )
}
