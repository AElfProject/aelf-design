---
nav: Components
group:
  title: Display
  order: 3
---

# Address

<Badge type='success'>aelf-design</Badge> aelf-design own component

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Size

<code src="./demos/size.tsx"></code>

## Ignore Event

<code src="./demos/ignoreEvent.tsx"></code>

## Ignore Copy

<code src="./demos/ignoreCopy.tsx"></code>

## Ignore PrefixSuffix

<code src="./demos/ignorePrefixSuffix.tsx"></code>

## Token

```js
<AELFDProvider
  customToken={{
    customAddress:{
      // basic color for text
      primaryLinkColor: isDarkMode ? '#127FFF' : '#1370DD',
      // basic color for icon
      primaryIconColor: isDarkMode ? '#484848' : '#E0E0E0',
      // hover color for text and icon
      addressHoverColor: isDarkMode ? '#3689DD' : '#3B9DFF',
      // active color for text and icon
      addressActiveColor: isDarkMode ? '#0756BC' : '#0460D9',
    }
  }}
>
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | hash地址 | `string` | - | `1.0.0`&nbsp; |
| chain | 主侧链信息 | `AELF \| tDVV \| tDVW` | `AELF` | `1.0.0` |
| preLen | ...之前保留多少位 | `number` | `0` | `1.0.0` |
| endLen | ...之后保留多少位 | `number` | `0` | `1.0.0` |
| hasCopy | 是否展示复制按钮 | `boolean` | `true` | `1.0.0` |
| addressClickCallback | 点击hash地址回调函数 | `(originAddress?: string,finalAddress?: string,e?: React.MouseEvent<HTMLElement>) => void` | - | `1.0.0` |
| className | 设置最外层样式 | `string` | - | `1.0.0` |
| size | 设置元素大小 | `small \| default \| large \| ultra` <br/>`small`: font-size:12px <br/>`default`: font-size:14px <br/>`large`: font-size:16px <br/>`ultra`: font-size:20px | `default`&nbsp; | `1.0.0` |
| ignorePrefixSuffix | 忽略添加前后缀 | `boolean` | `false` | `1.0.0` |
| ignoreEvent | 忽略绑定点击事件 | `boolean` | `false` | `1.0.0` |
