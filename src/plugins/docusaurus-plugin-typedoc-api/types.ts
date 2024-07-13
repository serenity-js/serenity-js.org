export interface PackageCompatibility {
    label: string;
    name: string;
    version: string;
    description: string;
    compatibility: Record<string, string>;
}

export interface PackageCategory {
    label: string;
    description: string;
    items: Array<PackageCompatibility & { permalink: string }>;
}
