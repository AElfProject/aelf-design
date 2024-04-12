---
nav: Components
group:
  title: Display
  order: 3
---

# Alert

customize padding and colors

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Closable

<code src="./demos/close.tsx"></code>

## Types

<code src="./demos/type.tsx"></code>

## With Icon

<code src="./demos/icon.tsx"></code>

## With Description

<code src="./demos/description.tsx"></code>

## ErrorBoundary

<code src="./demos/errorBoundary.tsx"></code>

## Token

```js
<AELFDProvider
  theme={{
    components:{
      Alert: {
        defaultPadding: '9px 12px',
        withDescriptionPadding: '24px 24px',
        colorIcon: appearance === 'dark' ? '#FFFFFF' : '#101114',
        colorIconHover: appearance === 'dark' ? '#F8F8F8' : '#212121',
      },
    }
  }}
>
```

## Supported Token

refer to [Alert Token](https://ant.design/components/alert-cn#design-token)

## Supported API

refer to [Alert API](https://ant.design/components/alert-cn#api)
