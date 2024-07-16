---
nav: Components
group:
  title: Display
  order: 3
---

# Table

1. customize pagination
2. customize table header

<!-- prettier-ignore -->
:::warning
Since the paginator has been rewritten, this onChange will not trigger paging. Use the onChange of the paging component.
:::

## Basic Table

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider
  customTokens={
    customTable: {
      // Table header rounded corners
      headerBorderRadius: 6,
    },
  }
 theme={{
  components:{
    Table: {
      // header background
      headerBg: appearance === 'dark' ? '#353535' : '#F0F0F0',
      // Table row floating background color
      rowHoverBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
      // Header text color
      headerColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
      // Control the font thickness of title components (such as h1, h2, h3) or selected items. The setting here changes the font thickness of the header.
      fontWeightStrong: 500,
    }
  }
}}>
```

## Supported Token

refer to[Table Token](https://ant.design/components/table-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

<!-- prettier-ignore -->
:::warning
Since the paginator has been rewritten, this onChange will not trigger paging. Use the onChange of the paging component. 
:::

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| pagination <Badge type='warning'>Revise</Badge> | [Pagination component api](/components/pagination) |  |  | `1.0.0` |
| onChange <Badge type='warning'>Revise</Badge> | Pagination changes will not trigger this api |  |  | `1.0.0` |

## Supported API

refer to [Table API](https://ant.design/components/table-cn#table)
