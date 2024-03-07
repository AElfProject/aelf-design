---
nav: Components
group:
  title: Display
  order: 3
---

# Search

Aelf 新增的组件

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Prefix and Status

<code src="./demos/prefix.tsx"></code>

## 组件 Token

无

## API

```ts
interface FilterItemType extends MenuItemType {
  value: string;
}
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| inputSize | 设置搜索框大小 | `small \| middle` | middle | - |
| dropdownSize | 设置搜索框下拉筛选菜单大小 | `small \| medium \| default \| large` | default | - |
| filterItems | 下拉筛选菜单内容 | `FilterItemType[]` | - | - |
| prefixWidth | 筛选区域元素宽度 | `string \| number` | auto | - |
| withSearchIcon | 搜索按钮与搜索框的位置关系 | `connect \| inline \| after` <br/> connect: 连接在搜索框后面;<br/>Inline: 在搜索框内部;<br/>after: 在搜索框后面，不连接需要指定，否则不展示搜索按钮 | 需要指定，否则不展示搜索按钮 | - |
| status | 设置搜索框大小 | `error \| warning` | - | - |
| className | 设置输入框外层样式 | `string` | - | - |
| inputClassName | 设置输入框input区域样式 | `string` | - | - |
| onSelectChange | 下拉筛选菜单选择回调 | `(info: FilterItemType) => void` | - | - | - |
| onSearchBtnClick | 搜索按钮点击回调 | `(e: React.MouseEvent<HTMLElement>) => void` | - | - |
