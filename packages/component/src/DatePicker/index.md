---
nav: Components
group:
  title: Display
  order: 3
---

# DatePicker

## For PC

<code src="./demos/pc.tsx"></code>

### API

refer to [DatePicker](https://ant-design.antgroup.com/components/date-picker-cn#%E5%85%B1%E5%90%8C%E7%9A%84-api)

### Token

```js
<AELFDProvider theme={{
  components:{
    DatePicker: {
      // width of cell
      cellWidth: 44,
      // height of cell
      cellHeight: 24,
    }
  }
}}>
```

### Supported token

refer to [DatePicker](https://ant.design/components/date-picker-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## For Mobile

<code src="./demos/mobile.tsx"></code>

### API

refer to [Picker](https://mobile.ant.design/zh/components/picker/#%E5%B1%9E%E6%80%A7-2)

### Token

Inherited global token, no extended token, follows global token specification

| Token | Description | Type | Default |
| --- | --- | --- | --- |
| colorTextBase | Date text color | `string` | Dark mode:`#E8E8E8` <br>Day mode:`#1A1A1A` |
| colorBgElevated | Panel background color | `string` | Dark mode:`#282828` <br>Day mode:`#FFFFFF` |
| colorPrimary | Action button(`done/cancel`)'s color | `string` | Dark mode:`#1370DD` <br>Day mode:`#127FFF` |
