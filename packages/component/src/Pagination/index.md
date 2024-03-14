---
nav: Components
group:
  title: Display
  order: 3
---

# Pagination

<Badge type='success'>aelf-design</Badge> aelf-design own component

## Basic Usage

<code src="./demos/basic.tsx"></code>

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
| current | 当前页数 | `number` | - | `1.0.0` |
| pageSize | 每页条数 | `number` | `10` | `1.0.0` |
| defaultCurrent | 默认的当前页数 | `number` | `1` | `1.0.0` |
| defaultPageSize | 默认的每页条数 | `number` | `10` | `1.0.0` |
| hideOnSinglePage | 只有一页时是否隐藏分页器。根据options最小值判断 | `boolean` | `false`&nbsp; | `1.0.0` |
| total | 数据总数 | `number` | - | `1.0.0` |
| showSizeChanger | 是否显示pageSize切换 | `boolean` | `true` | `1.0.0` |
| pageChange | 页码改变的回调，参数是改变后的页码 | `function(page)` | - | `1.0.0` |
| pageSizeChange | pageSize 改变的回调，参数是改变后的页码及每页条数。因为这里默认处理当sizeChange的时候，页码重置为1，所以一起返回了 | `function(current, size)` | - | `1.0.0`&nbsp; |
