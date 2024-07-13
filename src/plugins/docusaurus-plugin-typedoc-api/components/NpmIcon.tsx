import Link from '@docusaurus/Link';
import React from 'react';

export interface NpmIconProps {
    packageName: string;
}

export default function npmLink({ packageName }: NpmIconProps): React.JSX.Element {
    return (
        <Link className="tsd-anchor"
              href={`https://npmjs.com/package/${ packageName }`}
              rel="noreferrer"
              target="_blank"
              title={ `See ${ packageName } on npmjs.com` }
        >
            <i className="codicon codicon-package" />
        </Link>
    )
}
