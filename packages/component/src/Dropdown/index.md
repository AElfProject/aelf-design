---
nav: Components
group:
  title: Display
  order: 3
---

# Dropdown

add props：size、offsetX、offsetY

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider theme={{
  components:{
    Dropdown: {
      // Controls the background color of component items when the mouse is hovering and activated.
      controlItemBgActiveHover: appearance === 'dark' ? '#212121' : '#F8F8F8'
    }
  }
}}>
```

## Supported Token

refer to [Dropdown Token](https://ant.design/components/dropdown-cn/#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size<Badge type='success'>New</Badge> | Set drop-down panel size | `small \| medium \| default \| large` | `default` | `1.0.0` |
| offsetX<Badge type='success'>New</Badge> | The horizontal offset of the drop-down panel from the triggering element | `number` | `0` | `1.0.0` |
| offsetY <Badge type='success'>New</Badge> | The vertical offset of the drop-down panel from the triggering element | `number` | `0` | `1.0.0` |

## Supported API

refer to [Dropdown API](https://ant.design/components/dropdown-cn#dropdown)
