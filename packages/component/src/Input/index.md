---
nav: Components
group:
  title: Display
  order: 3
---

# Input

1. 定制了 size props、 文本样式
2. `Input` 默认有 allowClearIcon
3. `Input.Password` 定制了 隐藏/显示icon
4. `Input.TextArea`

## Basic Usage

size: small | middle; 高度为 40 | 48 <code src="./demos/basic.tsx"></code>

## Input.Password

<code src="./demos/password.tsx"></code>

## Input.TextArea

<code src="./demos/textArea.tsx"></code>

## 组件 token

```json
Input: {
    // 标准输入框纵向内边距
    paddingBlock: 11,
    // 小号输入框纵向内边距
    paddingBlockSM: 7,
    // 标准输入框横向内边距
    paddingInline: 11,
    // 小号输入框横向内边距
    paddingInlineSM: 7,
    // 前/后置标签背景色
    addonBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
 }
```

## API

| Property | Description | Type              | Default  | Version |
| -------- | ----------- | ----------------- | -------- | ------- |
| size     | input 高度  | `small \| middle` | `middle` | -       |
