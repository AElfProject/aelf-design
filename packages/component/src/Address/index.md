---
nav: Components
group:
  title: Display
  order: 3
---

# Address

Aelf 新增组件

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Size

<code src="./demos/size.tsx"></code>

## Event

<code src="./demos/event.tsx"></code>

## 组件 token

```json
customAddress: {
  primaryLinkColor: string   // hash地址文本的基础颜色
  primaryIconColor: string   // hash地址文本后面的icon的基础颜色
  addressHoverColor: string  // hash地址文本、icon的hover颜色
  addressActiveColor: string // hash地址文本、icon的active颜色
}
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| address | hash地址 | string | - | - |
| chain | 主侧链信息 | `AELF \| tDVV \| tDVW` | `AELF` | - |
| preLen | ...之前保留多少位 | number | 0 | - |
| endLen | ...之后保留多少位 | number | 0 | - |
| hasCopy | 是否展示复制按钮 | boolean | true | - |
| addressClickCallback | 点击hash地址回调函数 | `(originAddress?: string,finalAddress?: string,e?: React.MouseEvent<HTMLElement>) => void` | - | - |
| className | 设置最外层样式 | string | - | - |
| size | 设置元素大小 | `small \| default \| large \| ultra` <br/>small: font-size:12px <br/>default: font-size:14px <br/>large: font-size:16px <br/>ultra: font-size:20px | `default` | - | - |
| ignorePrefixSuffix | 忽略添加前后缀 | boolean | false | - |
| ignoreEvent | 忽略绑定点击事件 | boolean | false | - |
