---
nav: Components
group:
  title: Display
  order: 3
---

# Pagination

<Badge type='success'>aelf-design</Badge> aelf-design own component

## Basic Usage

<code src="./demos/basic.tsx"></code> <code src="./demos/last.tsx"></code>

## Token

```js
<AELFDProvider
  customToken={{
    customAddress:{
      colorTextSecondary: isDarkMode ? '#8C8C8C' : '#808080',
      colorBgHover: isDarkMode ? '#212121' : '#F8F8F8',
      colorDownArrow: isDarkMode ? '#FFFFFF' : '#101114',
    }
  }}
>
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| current | Current page number | `number` | - | `1.0.0`&nbsp; |
| pageSize | Number of items per page | `number` | `10` | `1.0.0` |
| defaultCurrent | Default current page number | `number` | `1` | `1.0.0` |
| defaultPageSize | Default number of items per page | `number` | `10` | `1.0.0` |
| hideOnSinglePage | Whether to hide the paginator when there is only one page. Decide based on the minimum value of options | `boolean` | `false` | `1.0.0` |
| total | Total data | `number` | - | - |
| showSizeChange | Whether to display pageSize switch | `boolean` | `true` | `1.0.0` |
| options | Specify how many items can be displayed on each page | `number[]` | `[10, 20, 50]` | `1.0.0` |
| onChange | Callback for page number or pageSize change. The parameters are the changed page number and the number of items per page | `function(page, pageSize)` | - | `1.0.0` |
| pageChange | Callback for page number change, the parameter is the changed page number | `function(page)` | - | `1.0.0` |
| pageSizeChange | The callback for pageSize change, the parameters are the changed page number and the number of items per page. Because the default processing here is that when sizeChange occurs, the page number is reset to 1, so it is returned together | `function(current, size)` | - | `1.0.0` |
