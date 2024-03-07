---
nav: Components
group:
  title: Display
  order: 3
---

# Typography

1. Text 新增 `fontWeight、 size` props
2. Title 新增 `fontWeight level` props

## Typography.Title

<code src="./demos/title.tsx"></code>

## Typography.Text

<code src="./demos/text.tsx"></code>

## API

### Typography.Title

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| fontWeight | 设置字体粗细 | `Regular \| Medium \| Bold` | `Regular` | - |
| level | 重要程度，相当于 h1、h2、h3、h4、h5 | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7` <br/> 1: fontSize = 56 lineHeight = 64 <br/> 2: fontSize = 48 lineHeight = 56 <br/>3: fontSize = 40 lineHeight = 48<br/> 4: fontSize = 32 lineHeight = 40 <br/>5: fontSize = 24 lineHeight = 32 <br/>6: fontSize = 20 lineHeight = 28<br/> 7: fontSize = 16 lineHeight = 24 | 7 | - |

### Typography.Text

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| fontWeight | 设置字体粗细 | `Regular \|Medium \|Bold` | `Regular` | - |
| size | 字体大小 | `normal \| mini \| small`<br/>normal：fontSize = 14 lineHeight = 22 <br/>small：fontSize = 12 lineHeight = 20 <br/>mini： fontSize = 10 lineHeight = 18 | `normal` | - |
