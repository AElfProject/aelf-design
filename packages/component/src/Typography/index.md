---
nav: Components
group:
  title: Display
  order: 3
---

# Typography

1. Title add `fontWeight、level` props
2. Text add `fontWeight、 size` props

## Typography.Title

<code src="./demos/title.tsx"></code>

## Typography.Text

<code src="./demos/text.tsx"></code>

## API

### Typography.Title

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| fontWeight<Badge type='warning'>Revise</Badge> | Set font weight | `Regular \| Medium \| Bold` | `Regular` | `1.0.0` |
| level<Badge type='warning'>Revise</Badge> | Importance, equivalent to h1、h2、h3、h4、h5 | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7` <br/> 1: fontSize = 56 lineHeight = 64 <br/> 2: fontSize = 48 lineHeight = 56 <br/>3: fontSize = 40 lineHeight = 48<br/> 4: fontSize = 32 lineHeight = 40 <br/>5: fontSize = 24 lineHeight = 32 <br/>6: fontSize = 20 lineHeight = 28<br/> 7: fontSize = 16 lineHeight = 24 | `7` | `1.0.0` |

### Typography.Text

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| fontWeight<Badge type='warning'>Revise</Badge> | Set font weight | `Regular \|Medium \|Bold` | `Regular` | `1.0.0` |
| size<Badge type='warning'>Revise</Badge> | font size | `normal \| mini \| small`<br/>normal：fontSize = 14 lineHeight = 22 <br/>small：fontSize = 12 lineHeight = 20 <br/>mini： fontSize = 10 lineHeight = 18 | `normal` | `1.0.0` |
