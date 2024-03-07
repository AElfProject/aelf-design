---
nav: Components
group:
  title: Display
  order: 3
---

# Pagination

1. 调整了样式
2. 定制了 上一页/上一页 icon
3. 固定文案：Records 10 Records、First、Last

## Basic Usage

<code src="./demos/basic.tsx"></code>

## 组件 Token

customToken

```json
customPagination: {
  colorTextSecondary: isDarkMode ? '#8C8C8C' : '#808080',
  colorBgHover: isDarkMode ? '#212121' : '#F8F8F8',
  colorDownArrow: isDarkMode ? '#FFFFFF' : '#101114',
},
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| current | 当前页数 | number | - | - |
| pageSize | 每页条数 | number | 10 | - |
| defaultCurrent | 默认的当前页数 | number | 1 | - |
| defaultPageSize | 默认的每页条数 | number | 10 | - |
| hideOnSinglePage | 只有一页时是否隐藏分页器。根据options最小值判断 | Boolean | false | - |
| total | 数据总数 | number | - | - |
| showSizeChanger | 是否显示pageSize切换 | Boolean | true | - |
| pageChange | 页码改变的回调，参数是改变后的页码 | function(page) | - | - |
| pageSizeChange | pageSize 改变的回调，参数是改变后的页码及每页条数。因为这里默认处理当sizeChange的时候，页码重置为1，所以一起返回了 | function(current, size) | - | - |
