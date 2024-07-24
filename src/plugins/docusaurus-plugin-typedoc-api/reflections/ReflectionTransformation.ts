export interface ReflectionTransformation<R extends any> {
    matches(reflection: any): reflection is R;
    transform(reflection: R): R;
}
