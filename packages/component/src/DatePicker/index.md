---
nav: Components
group:
  title: Display
  order: 3
---

# DatePicker

## for PC

<code src="./demos/pc.tsx"></code>

### API

refer to [DatePicker](https://ant-design.antgroup.com/components/date-picker-cn#%E5%85%B1%E5%90%8C%E7%9A%84-api)

### token

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

### other token

refer to [DatePicker](https://ant.design/components/date-picker-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## for Mobile

<code src="./demos/mobile.tsx"></code>

### API

refer to [Picker](https://mobile.ant.design/zh/components/picker/#%E5%B1%9E%E6%80%A7-2)

### token

Inherited global token, no extended token, follows global token specification

| Token | Description | Type | Default |
| --- | --- | --- | --- |
| colorTextBase | 日期文字颜色 | `string` | 暗黑模式：`#E8E8E8` <br>日间模式：`#1A1A1A` |
| colorBgElevated | 面板背景色 | `string` | 暗黑模式：`#282828` <br>日间模式：`#FFFFFF` |
| colorPrimary | 操作按钮(`done/cancel`)的颜色 | `string` | 暗黑模式：`#1370DD` <br>日间模式：`#127FFF` |
