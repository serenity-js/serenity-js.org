import { ReflectionTransformation } from './ReflectionTransformation';
import { JSONOutput } from 'typedoc';
import path from 'path';

export class SerenitySourceLinkTransformation implements ReflectionTransformation<JSONOutput.SignatureReflection> {
    private static readonly pattern = /(:?node_modules\/)?(?<namespace>@[a-z0-9-_]+)?\/?(?<package_name>[a-z0-9-_]+)\/(?<path_to_file>.*)/;

    matches(reflection: any): reflection is JSONOutput.SignatureReflection {
        return Array.isArray(reflection['sources']);
    }

    transform(reflection: JSONOutput.SignatureReflection): JSONOutput.SignatureReflection {
        return {
            ...reflection,
            sources: reflection.sources?.map(source => {
                const newFilename = this.fixOrRemoveSourceLink(source.fileName);
                return newFilename ? { ...source, fileName: newFilename } : undefined;
            }).filter(Boolean)
        } as JSONOutput.SignatureReflection;
    }

    private fixOrRemoveSourceLink(fileName: string): string | undefined {
        const match = fileName.match(SerenitySourceLinkTransformation.pattern);

        if (!match) {
            return fileName;
        }

        const { namespace, package_name, path_to_file } = match.groups;

        if (namespace === '@serenity-js') {
            return path.join(
                'packages',
                package_name,
                path_to_file.replace('.d.ts', '.ts')    // replacing .d.ts with .ts to link to the source file, even though the line number might be off
            );
        }

        // Don't link to sources outside the Serenity/JS monorepo since TypeDoc API plugin doesn't support that
        // https://github.com/milesj/docusaurus-plugin-typedoc-api/blob/b97223337544eeeaaf7019b5c50932555999c341/packages/plugin/src/components/SourceLink.tsx#L30
        return undefined;
    }
}
