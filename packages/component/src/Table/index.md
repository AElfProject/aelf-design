---
nav: Components
group:
  title: Display
  order: 3
---

# Table

1. customize pagination
2. customize table header

:::warning由于重写了分页器，这个onChange不会触发分页.使用分页组件的onChange :::

## Basic Table

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider
  customTokens={
    customTable: {
      // 表格头部圆角
      headerBorderRadius: 6,
    },
  }
 theme={{
  components:{
    Table: {
      // 表头背景
      headerBg: appearance === 'dark' ? '#353535' : '#F0F0F0',
      // 表格行悬浮背景色
      rowHoverBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
      // 表头文字颜色
      headerColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
      // 控制标题类组件（如 h1、h2、h3）或选中项的字体粗细,这里设置改变了表头的字体粗细
      fontWeightStrong: 500,
    }
  }
}}>
```

## Supported Token

refer to[Table Token](https://ant.design/components/table-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

:::warning由于重写了分页器，这个onChange不会触发分页.使用分页组件的onChange :::

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| pagination <Badge type='warning'>修改</Badge> | [分页组件api](/components/pagination) |  |  | `1.0.0` |
| onChange <Badge type='warning'>修改</Badge> | 分页变化不会触发这个api |  |  | `1.0.0` |

## Supported API

refer to [Table API](https://ant.design/components/table-cn#table)
