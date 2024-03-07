---
nav: Components
group:
  title: Display
  order: 3
---

# Tabs

1. 调整了样式
2. 修改 size props, 提供middle 和small 两种大小
3. 删除 tabBarGutter： tabs 之间的间隙

## Basic Usage

<code src="./demos/basic.tsx"></code>

## 组件 token

```json
Tabs: {
    // 标准大小横向标签页标签内间距
    horizontalItemPadding: '17px 16px',
    // 小号横向标签页标签内间距
    horizontalItemPaddingSM: '13px 10px',
 },
```

## API

| Property | Description                   | Type              | Default  | Version |
| -------- | ----------------------------- | ----------------- | -------- | ------- |
| size     | 提供 middle 和 small 两种大小 | `middle \| small` | `middle` | -       |
