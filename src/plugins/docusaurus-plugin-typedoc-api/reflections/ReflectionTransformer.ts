import { ReflectionTransformation } from './ReflectionTransformation';
import { isRecord } from 'tiny-types/lib/objects';

export class ReflectionTransformer {
    constructor(private readonly transformations: Array<ReflectionTransformation<any>>) {
    }

    transform(input: any | Array<any>): any {
        if (Array.isArray(input)) {
            return input.map(item => this.transform(item));
        }

        if (isRecord(input)) {
            const result = this.transformations.find(transformation => transformation.matches(input))?.transform(input) ?? input;

            return Object.fromEntries(Object.entries(result)
                .map(([ key, value ]) => [ key, this.transform(value) ])
            );
        }

        return input;
    }
}
