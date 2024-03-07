---
nav: Components
group:
  title: Display
  order: 3
---

# Dropdown

1. 新增 props：size、offsetX、offsetY

## Basic Usage

<code src="./demos/basic.tsx"></code>

## 组件 Token

```json
Dropdown: {
    // 控制组件项在鼠标悬浮且激活状态下的背景颜色。
    controlItemBgActiveHover: appearance === 'dark' ? '#212121' : '#F8F8F8'
 },
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size | 设置下拉面板大小 | `small \| medium \| default \| large` | default | - |
| offsetX | 下拉面板距离触发元素的横向偏移量 | number | 0 | - |
| offsetY | 下拉面板距离触发元素的纵向偏移量 | number | 0 | - |
