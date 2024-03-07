---
nav: Components
group:
  title: Display
  order: 3
---

# Button

1. 调整 size props
2. 新增 millisecondOfThrottle props

## Basic Usage

<code src="./demos/basic.tsx"></code>

## debounce button

<code src="./demos/debounce.tsx"></code>

## 组件 Token

customToken

```json
customButton: {
  borderRadiusDefault?: string   // 'mini' | 'small' 号按钮的圆角值
  borderRadiusLarge?: string   // 'medium' | 'large' | 'ultra'号按钮的圆角值
}
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size | 设置按钮 height | `mini \| small \| medium \| large \| ultra` | large | - |
| millisecondOfThrottle | 等待时间，单位为毫秒 | number | 0 | - |
