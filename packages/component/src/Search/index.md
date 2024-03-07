---
nav: Components
group:
  title: Display
  order: 3
---

# Search

aelf-design own component

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Size

<code src="./demos/size.tsx"></code>

## With SearchIcon

<code src="./demos/withSearchIcon.tsx"></code>

## With SearchMenu

<code src="./demos/withMenu.tsx"></code>

## Status

<code src="./demos/status.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| inputSize | 设置搜索框大小 | `small \| middle` | middle | `1.0.0` |
| dropdownSize | 设置搜索框下拉筛选菜单大小 | `small \| medium \| default \| large` | default | `1.0.0` |
| filterItems | 下拉筛选菜单内容 | [FilterItemType[]](#filteritemtype) | - | `1.0.0` |
| prefixWidth | 筛选区域元素宽度 | `string \| number` | auto | `1.0.0` |
| withSearchIcon | 搜索按钮与搜索框的位置关系 | `connect \| inline \| after` <br/> `connect`: 连接在搜索框后面;<br/> `inline`: 在搜索框内部;<br/> `after`: 在搜索框后面，不连接需要指定，否则不展示搜索按钮 | 需要指定，否则不展示搜索按钮 | `1.0.0` |
| status | 设置搜索框大小 | `error \| warning` | - | `1.0.0` |
| className | 设置输入框外层样式 | `string` | - | `1.0.0` |
| inputClassName | 设置输入框input区域样式 | `string` | - | `1.0.0` |
| onSelectChange | 下拉筛选菜单选择回调 | `(info: FilterItemType) => void` | - | `1.0.0` |
| onSearchBtnClick | 搜索按钮点击回调 | `(e: React.MouseEvent<HTMLElement>) => void` | - | - |
| onChange | 输入框内容变化时的回调 | `function(e)` | - | `1.0.0` |
| onPressEnter | 按下回车的回调 | `function(e)` | - | `1.0.0` |

### FilterItemType

```ts
interface FilterItemType extends MenuItemType {
  value: string;
}
```

MenuItemType：[Menu - Ant Design](https://ant.design/components/menu-cn#menuitemtype)
