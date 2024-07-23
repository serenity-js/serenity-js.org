import React, { useState, useEffect } from 'react';
import { CategoryDetails, PackageDetails } from '../../config/PackageJsonParser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const PackageCompatibilityMatrix: React.FC = () => {

    const { siteConfig} = useDocusaurusContext();

    const categories = siteConfig.customFields.categories as CategoryDetails[];

    return (
        <table>
            <thead>
                <tr>
                    <th>Package</th>
                    <th>Version</th>
                    <th>Compatibility</th>
                </tr>
            </thead>
            <tbody>
            { categories.map(categoryDetails => (
                <>
                    <tr>
                        <th colSpan={3}>{ categoryDetails.name }</th>
                    </tr>
                    { categoryDetails.items.map(packageDetails => (
                    <tr>
                        <td>{ packageDetails.name }</td>
                        <td>{ packageDetails.version }</td>
                        <td>
                            <ul>
                                { Object.entries(packageDetails.compatibility).map(([dependency, details]) => (
                                    <li key={dependency}>
                                        { dependency }: { details.version } ({ details.dependency })
                                    </li>
                                )) }
                            </ul>
                        </td>
                    </tr>
                    ))}
                </>
            ))}
            </tbody>
        </table>
    );
};

export default PackageCompatibilityMatrix;