---
nav: Components
group:
  title: Display
  order: 3
---

# Modal

1. customize `width` to 438
2. customize closeIcon, do not display when `closeIcon` is false

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider theme={{
  components:{
    Modal: {
      // Control the padding of elements
      paddingMD: 24,
      // Control horizontal padding of content elements
      paddingContentHorizontalLG: 24,
      // Control the font weight of heading components (such as h1, h2, h3)
      fontWeightStrong: 500,
      // Control title font size
      titleFontSize: 20,
      // Control title line height
      titleLineHeight: 1.4,
    }
  }
}}>
```

## Supported Token

refer to [Modal Token](https://ant.design/components/modal-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| width<Badge type='warning'>Revise</Badge> | set width | `string \| number` | `438` | `1.0.0` |
| closeIcon<Badge type='warning'>Revise</Badge> | Close icon，`false` not displayed when，Non `false` displays the default | `ReactNode \| boolean` | `true` | `1.0.0` |

## Supported API

refer to [Modal API](https://ant.design/components/modal-cn#api)
