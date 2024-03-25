import * as AntdIcons from '@aelf-design/internal-icons';

const categoriesConfig = require('./icon-config.json');

const other: string[] = [];

export const categories: Record<string, string[]> = {
  ...categoriesConfig,
  other,
};
export const CategoryNames = Object.keys(categories).reduce(
  (ace, key) => {
    ace[key] = key;
    return ace;
  },
  {} as Record<string, string>,
);

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
