---
nav: Components
group:
  title: Display
  order: 3
---

# Progress

1. 修改了样式
2. showInfo 默认为 false

## Basic Usage

<code src="./demos/basic.tsx"></code>

## 组件 token

```json
Progress: {
    // 进度条剩余部分颜色
  remainingColor: appearance === 'dark' ? '#282828' : '#F5F5F5',
    // 表示操作成功的 Token 序列，主色
  colorSuccess: appearance === 'dark' ? '#1370DD' : '#127FFF',
    // 进度条默认颜色，主色
  defaultColor: appearance === 'dark' ? '#1370DD' : '#127FFF',
},
```

## API

| Property | Description | Type | Default | Version |
| -------- | ----------- | ---- | ------- | ------- |
