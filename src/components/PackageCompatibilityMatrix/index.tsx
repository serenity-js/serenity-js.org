import React, { Fragment } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import DependencyTypeDescription from '../DependencyTypeDescription';
import NpmLink from '../NpmLink';
import { CategoryDetails, PackageDetails } from '../../config/PackageJsonParser';
import SemanticVersionRangeDescription from '../SemanticVersionRangeDescription';

const PackageCompatibilityMatrix: React.FC = () => {

    const { siteConfig } = useDocusaurusContext();

    const categories = siteConfig.customFields.categories as Array<CategoryDetails>;

    const permalink = (packageName: string) => `/api/${ packageName.split('/')[1] }`;

    return (
        <table id={"serenity-js-compatibility-matrix"}>
            <thead>
                <tr>
                    <th colSpan={ 2 } scope="colgroup">Serenity/JS Modules</th>
                    <th colSpan={ 2 } scope="colgroup">Compatibility</th>
                </tr>
                <tr>
                    <th scope="col">Package</th>
                    <th scope="col">Current version</th>
                    <th scope="col">Package</th>
                    <th scope="col">Compatible versions</th>
                </tr>
            </thead>
            <tbody>
            { categories.map(categoryDetails => (
                <Fragment key={categoryDetails.name}>
                    <tr>
                        <th colSpan={ 4 } scope="colgroup">{ categoryDetails.name }</th>
                    </tr>

                    { categoryDetails.items.flatMap(toRow).map((packageDetails, packageIndex) =>
                        packageDetails.dependencies.length === 0
                            ? (
                                <tr key={ categoryDetails.name + packageIndex }>
                                    <th scope="row">
                                        <Link to={ permalink(packageDetails.name) }>{ packageDetails.name }</Link>
                                    </th>
                                    <td>
                                        <code>{ packageDetails.version }</code>
                                    </td>
                                    <td colSpan={2}></td>
                                </tr>
                            )
                            : packageDetails.dependencies.map((dependency, dependencyIndex) => (
                                <tr key={ dependency.name + packageIndex }>
                                    { dependencyIndex === 0 && (
                                        <>
                                            <th rowSpan={ packageDetails.dependencies.length } scope="rowgroup">
                                                <Link to={ permalink(packageDetails.name) }>{ packageDetails.name }</Link>
                                            </th>
                                            <td rowSpan={ packageDetails.dependencies.length }>
                                                <code>{ packageDetails.version }</code>
                                            </td>
                                        </>
                                    ) }
                                    <td>
                                        <NpmLink packageName={ dependency.name }/> <small>
                                            <DependencyTypeDescription
                                                format={ typeName => `(${ typeName })` }
                                                type={ dependency.type }/>
                                        </small>
                                    </td>
                                    <td>
                                        { dependency.versionRanges.map((range, index) => (
                                            <Fragment key={ dependency.name + index }>
                                                <SemanticVersionRangeDescription  range={ range } />
                                                <br />
                                            </Fragment>
                                        )) }
                                    </td>
                                </tr>
                            ) )
                    ) }
                </Fragment>
            )) }
            </tbody>
        </table>
    );
};

function toRow(packageDetails: PackageDetails & { permalink: string }): Array<{
    name: string,
    version: string,
    dependencies: Array<{ name: string, type: 'direct' | 'optional' | 'required', versionRanges: string[] }>
}> {
    const dependencies = Object.entries(packageDetails.compatibility).sort();

    return [ {
        name: packageDetails.name,
        version: packageDetails.version,
        dependencies: dependencies
            .map(([ name, details ]) => ({
                name,
                type: details.type,
                versionRanges: details.version.split('||') .map(range => range.trim()) }
            ))
    } ];
}

export default PackageCompatibilityMatrix;