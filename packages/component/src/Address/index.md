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

## Custom Colors

<code src="./demos/customColor.tsx">custom colors</code>

## Size

<code src="./demos/size.tsx"></code>

## Ignore Event

<code src="./demos/ignoreEvent.tsx"></code>

## Ignore Copy

<code src="./demos/ignoreCopy.tsx"></code>

## Ignore PrefixSuffix

<code src="./demos/ignorePrefixSuffix.tsx"></code>

## Token

<!-- prettier-ignore -->
:::info
addedPrimaryLinkColor | primaryIconColor | addressHoverColor | addressActiveColor API settings for these four colors, After the component api is set, the token setting will be overwritten.
:::

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
| address | hash address | `string` | - | `1.0.0`&nbsp; |
| chain | Mainchain and sidechain information | `AELF \| tDVV \| tDVW` | `AELF` | `1.0.0` |
| preLen | ...Number of digits reserved before | `number` | `0` | `1.0.0` |
| endLen | ...Number of bits retained after | `number` | `0` | `1.0.0` |
| hasCopy | Whether to display the copy button | `boolean` | `true` | `1.0.0` |
| addressClickCallback | Click hash address callback function | `(originAddress?: string,finalAddress?: string,e?: React.MouseEvent<HTMLElement>) => void` | - | `1.0.0` |
| className | Set outermost style | `string` | - | `1.0.0` |
| size | Set element size | `small \| default \| large \| ultra` <br/>`small`: font-size:12px <br/>`default`: font-size:14px <br/>`large`: font-size:16px <br/>`ultra`: font-size:20px | `default`&nbsp; | `1.0.0` |
| ignorePrefixSuffix | Ignore adding prefix and suffix | `boolean` | `false` | `1.0.0` |
| ignoreEvent | Ignore binding click events | `boolean` | `false` | `1.0.0` |
| primaryLinkColor | Address default color | `string` | `customToken.customAddress.primaryLinkColor` | `1.0.0` |
| primaryIconColor | copy button color | `string` | `customToken.customAddress.primaryIconColor` | `1.0.0` |
| addressHoverColor | Address and copy button hover color | `string` | `customToken.customAddress.addressHoverColor` | `1.0.0` |
| addressActiveColor | Address and button click colors | `string` | `customToken.customAddress.addressActiveColor` | `1.0.0` |
