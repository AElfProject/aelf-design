---
nav: Components
group:
  title: Display
  order: 3
---

# Button

1. adjust props: **size**
2. add new props: **millisecondOfDebounce**

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Size

<code src="./demos/size.tsx"></code>

## Type

<code src="./demos/type.tsx"></code>

## Debounce button

<code src="./demos/debounce.tsx"></code>

## Token

```js
<AELFDProvider customToken={{
  customButton:{
    borderRadiusDefault?: string,   // border-radius for 'mini' | 'small'
    borderRadiusLarge?: string   // border-radius for 'medium' | 'large' | 'ultra'
  }
}}>
```

## Supported Token

refer to [Button Token](https://ant.design/components/button-cn/#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size<Badge type='warning'>修改</Badge> | 设置按钮 height | `mini \| small \| medium \| large \| ultra` <br/> `mini`: `24px` <br/> `small`: `32px` <br/> `medius`: `40px` <br/> `large`: `48px` <br/> `ultra`: `56px` | `large` | `1.0.0` |
| millisecondOfDebounce<Badge type='success'>新增</Badge> | 等待时间，单位为毫秒 | `number` | `0` | `1.0.0` |

## Supported API

refer to [Button API](https://ant.design/components/button-cn#api)
