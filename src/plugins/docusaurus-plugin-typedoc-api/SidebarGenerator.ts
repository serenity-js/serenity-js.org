import { CategoryDetails } from '../../config/PackageJsonParser';

export interface CategoryDescriptor {
    name: string;
    description: string;
    items: string[];
}

export class SidebarGenerator<Item extends { label: string }, Category extends { items: Array<Item>}> {
    private readonly categorisedItems: Array<Category> = [];

    constructor(
        private readonly categories: Array<CategoryDetails>,
        categoryMapper: (category: CategoryDetails) => Category,
    ) {
        this.categorisedItems = categories.map(category => categoryMapper(category));
    }

    add(item: Item): SidebarGenerator<Item, Category> {
        const found = this.categories.map((category, categoryIndex) => {
            return {
                itemIndex: category.items.findIndex(pkg => pkg.name === item.label), // -1 if not found
                categoryIndex,
                category
            }
        }).filter(({ itemIndex }) => itemIndex > -1)[0];

        if (found) {
            this.categorisedItems[found.categoryIndex].items[found.itemIndex] = item;
        }

        return this;
    }

    toJSON() {
        return this.categorisedItems;
    }
}