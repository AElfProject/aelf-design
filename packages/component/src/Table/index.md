---
nav: Components
group:
  title: Display
  order: 3
---

# Table

1. customize pagination
2. customize table header

## Basic Table

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider theme={{
  components:{
    Table: {
      headerBg: appearance === 'dark' ? '#353535' : '#F0F0F0',
      rowHoverBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
      headerColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
      fontWeightStrong: 500,
    }
  }
}}>
```

## Supported Token

refer to [Table Token](https://ant.design/components/table-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

## Supported API

refer to [Table API](https://ant.design/components/table-cn#table)
