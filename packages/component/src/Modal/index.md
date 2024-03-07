---
nav: Components
group:
  title: Display
  order: 3
---

# Modal

1. 定制 width 为 438
2. Bool(closeIcon) 为 true 时定制了icon，为 false 时显示 null

## Basic Usage

<code src="./demos/basic.tsx"></code>

## 组件 Token

```json
Modal: {
    // 控制元素的内间距
    paddingMD: 24,
    // 控制内容元素水平内间距
    paddingContentHorizontalLG: 24,
    // 控制标题类组件（如 h1、h2、h3）或选中项的字体粗细
    fontWeightStrong: 500,
    // 标题字体大小
    titleFontSize: 20,
    // 标题行高
    titleLineHeight: 1.4,
 },
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| width | 宽度 | `string \| number` | 438 | - |
| closeIcon | 关闭icon | - | Bool(closeIcon) 为 true 时定制了icon，为 false 时显示 null | - |
