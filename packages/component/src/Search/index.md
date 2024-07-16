---
nav: Components
group:
  title: Display
  order: 3
---

# Search

<Badge type='success'>aelf-design</Badge> aelf-design own component

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
| inputSize | Set search box size | `small \| middle` | `middle` | `1.0.0`&nbsp; |
| dropdownSize | Set the size of the search box drop-down filter menu | `small \| medium \| default \| large` | `default` | `1.0.0` |
| filterItems | Drop down filter menu content | [FilterItemType[]](#filteritemtype) | - | `1.0.0` |
| prefixWidth | Filter area element width | `string \| number` | `auto` | `1.0.0` |
| withSearchIcon | The positional relationship between the search button and the search box | `connect \| inline \| after` <br/> `connect`: Connect behind the search box;<br/> `inline`: inside the search box;<br/> `after`: Behind the search box, no connection needs to be specified, otherwise the search button will not be displayed | Need to be specified, otherwise the search button will not be displayed | `1.0.0` |
| status | Set search box size | `error \| warning` | - | `1.0.0` |
| className | Set the outer style of the input box | `string` | - | `1.0.0` |
| inputClassName | Set the input area style of the input box | `string` | - | `1.0.0` |
| onSelectChange | Drop-down filter menu selection callback | `(info: FilterItemType) => void` | - | `1.0.0` |
| onSearchBtnClick | Search button click callback | `(e: React.MouseEvent<HTMLElement>) => void` | - | - |
| onChange | Callback when the content of the input box changes | `function(e)` | - | `1.0.0` |
| onPressEnter | Callback when pressing enter | `function(e)` | - | `1.0.0` |

### FilterItemType

```ts
interface FilterItemType extends MenuItemType {
  value: string;
}
```

MenuItemType：[Menu - Ant Design](https://ant.design/components/menu-cn#menuitemtype)
