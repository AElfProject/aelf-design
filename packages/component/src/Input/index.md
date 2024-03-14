---
nav: Components
group:
  title: Display
  order: 3
---

# Input

1. customize size props
2. `Input` allowClearIcon by default
3. `Input.Password` customize show/hide icon
4. `Input.TextArea`

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Input.Password

<code src="./demos/password.tsx"></code>

## Input.TextArea

<code src="./demos/textArea.tsx"></code>

## Token

```js
<AELFDProvider theme={{
  components:{
    Input: {
      // Vertical padding of standard input box
      paddingBlock: 11,
      // Vertical padding of small input box
      paddingBlockSM: 7,
      // Horizontal padding of standard input box
      paddingInline: 11,
      // Horizontal padding of small input box
      paddingInlineSM: 7,
      // Prefix/suffix label background color
      addonBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
    }
  }
}}>
```

## Supported Token

refer to [Input Token](https://ant.design/components/input-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size<Badge type='warning'>修改</Badge> | 设置 input 高度 | `small \| middle` <br/> `small: 40px` <br/> `middle: 48px` | `middle` | `1.0.0` |

## Supported API

refer to [Input API](https://ant.design/components/input-cn#api)
