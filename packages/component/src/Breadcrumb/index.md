---
nav: Components
group:
  title: Display
  order: 3
---

# Breadcrumb

1. add props **separatorMode**
2. add props **size**: Can control line height and font size

## Basic Usage

<code src="./demos/basic.tsx"></code>

## size

<code src="./demos/size.tsx"></code>

## custom separator

<code src="./demos/customSeparator.tsx"></code>

## Breadcrumb With dropDown

<code src="./demos/dropDown.tsx"></code>

## Token

```js
<AELFDProvider theme={{
  components:{
    Breadcrumb: {
        //
    }
  }
}}>
```

## Supported Token

refer to [Breadcrumb Token](https://ant.design/components/breadcrumb-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

### Breadcrumb

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| separatorMode<Badge type='success'>新增</Badge> | 可选择的分隔符：箭头或者斜线 | `'slash' \| 'arrow'` | `slash` | - |
| size<Badge type='success'>新增</Badge> | 尺寸 | `small` | - | - |

## Supported API

refer to [Button API](https://ant.design/components/button-cn#api)
