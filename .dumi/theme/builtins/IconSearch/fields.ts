import * as AntdIcons from '@ant-design/icons/lib/icons';

const all = Object.keys(AntdIcons)
  .map((n) => n.replace(/(Outlined|Filled|TwoTone)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

// 方向指示类图标
const direction = ['CircleCloseIcon', 'ClearIcon'];

// 提示建议类图标
const suggestion: string[] = [];

// 交互按钮图标
const interaction: string[] = [];

// 聊天图标
const chat: string[] = [];

const datum = [...direction, ...suggestion, ...interaction, ...chat];

const other = all.filter((n) => !datum.includes(n));

export const categories = {
  direction,
  suggestion,
  interaction,
  chat,
  other,
};

export const CategoryNames = {
  direction: '方向指示类图标',
  suggestion: '提示建议类图标',
  interaction: '交互按钮图标',
  chat: '聊天图标',
  other: '其他图标',
};

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
