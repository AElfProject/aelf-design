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
        colorError: appearance === 'dark' ? '#D43939' : '#F53F3F',
        colorErrorBg: appearance === 'dark' ? '#361F1F' : '#FEE8E8',
        colorErrorBorder: appearance === 'dark' ? '#952626' : '#FFBFBF',
        colorInfo: appearance === 'dark' ? '#1370DD' : '#127FFF',
        colorInfoBg: appearance === 'dark' ? '#192737' : '#E2F0FF',
        colorInfoBorder: appearance === 'dark' ? '#0A4D9C' : '#ACD2FF',
        colorSuccess: appearance === 'dark' ? '#04A039' : '#00B73E',
        colorSuccessBg: appearance === 'dark' ? '#172E1F' : '#E6F8EC',
        colorSuccessBorder: appearance === 'dark' ? '#007026' : '#96E2B0',
        colorWarning: appearance === 'dark' ? '#DD8604' : '#FF9900',
        colorWarningBg: appearance === 'dark' ? '#372A17' : '#FFF3E0',
        colorWarningBorder: appearance === 'dark' ? '#9C5D00' : '#FFD596',
      },
    }
  }}
>
```

## Supported Token

refer to [Alert Token](https://ant.design/components/alert-cn#design-token)

## Supported API

refer to [Alert API](https://ant.design/components/alert-cn#api)
