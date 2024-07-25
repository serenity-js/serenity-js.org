import Link from '@docusaurus/Link';
import React from 'react';

export interface NpmIconProps {
    packageName: string;
    showPackageName?: boolean;
}

export default function NpmLink({ packageName, showPackageName = true }: NpmIconProps): React.JSX.Element {
    return (
        <Link className={ showPackageName ? 'tsd-kind-icon' : 'tsd-anchor' }
              href={`https://npmjs.com/package/${ packageName }`}
              rel="noreferrer"
              target="_blank"
              title={ `See ${ packageName } on npmjs.com` }
        >
            <i className="codicon codicon-package" />
            { showPackageName ? packageName : null }
        </Link>
    )
}
