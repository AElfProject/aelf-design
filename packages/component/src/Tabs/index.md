---
nav: Components
group:
  title: Display
  order: 3
---

# Tabs

1. customize style
2. delete `size` props, and provide `middle`,`small` size
3. delete `tabBarGutter`: gap between tabs

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider theme={{
  components:{
    Tabs: {
      // padding of standard tabs
      horizontalItemPadding: '17px 16px',
      // padding of small tabs
      horizontalItemPaddingSM: '13px 10px',
    },
  }
}}>
```

## Supported Token

refer to [Tabs Token](https://ant.design/components/tabs-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size<Badge type='warning'>Revise</Badge> | Available in two sizes: middle and small | `middle \| small` | `middle` | `1.0.0` |

## Supported API

refer to [Tabs API](https://ant.design/components/tabs-cn#api)
