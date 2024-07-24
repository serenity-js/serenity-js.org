import { ReflectionTransformation } from './ReflectionTransformation';
import { JSONOutput } from 'typedoc';
import { PackageReflectionGroup } from 'docusaurus-plugin-typedoc-api/lib/types';
import { isRecord } from 'tiny-types/lib/objects';
import fs from 'fs';

export class TargetDeclarationTransformation implements ReflectionTransformation<JSONOutput.ReferenceType> {
    private readonly declarations: Record<string, Record<string, number>> = {};

    constructor(packages: PackageReflectionGroup[]) {
        this.declarations = packages.reduce((acc, pkg) => {
            pkg.entryPoints.flatMap(entryPoint => entryPoint.reflection.children).forEach(declaration => {
                acc[pkg.packageName] = {
                    ...acc[pkg.packageName],
                    [declaration.name]: declaration.id,
                }
            })

            return acc;
        }, {} as Record<string, Record<string, number>>)

        fs.writeFileSync('packages-declarations.json', JSON.stringify(this.declarations, null, 2));
    }

    matches(reflection: any): reflection is JSONOutput.ReferenceType {
        return reflection.type === 'reference'
            && isRecord(reflection['target'])
            && undefined !== this.declarations[reflection.package];
    }

    transform(reflection: JSONOutput.ReferenceType): JSONOutput.ReferenceType {
        return {
            ...reflection,
            target: this.declarations[reflection.package][reflection.name],
        };
    }
}
