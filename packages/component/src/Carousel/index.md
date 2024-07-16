---
nav: Components
title: Carousel
group:
  title: Display
  order: 3
---

# Carousel

<Badge type='success'>aelf-design</Badge> aelf-design own component

## Basic Usage

<code src="./demos/basic.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| data | Carousel image data, URL must be passed | `ICarouselSlideItem { url: string [key: string]: any}[]` | `{ headClip: 6, tailClip: 4 }` | `1.0.0`&nbsp; |
| galleryObjectFit | Gallery image display rules | `fill \| contain \| cover \| none \| scale-down` | `cover` | `1.0.0` |
| thumbsSlidesPerView | Number of thumbs displayed on one page | `number` | `5` | `1.0.0` |
| onSlideClick | Clicking on the carousel image triggers the event, and the returns clicked image ICarouselSlideItem object | `(value: ICarouselSlideItem) => void` | - | `1.0.0` |

## Token

```js
<AELFDProvider
  customToken={{
    customCarousel:{
      colorNavigation: isDarkMode ? '#E8E8E8' : '#070A26',
      colorNavigationHover: isDarkMode ? '#fff' : '#22253E',
      colorNavigationActive: isDarkMode ? '#8C8C8C' : '#131631',
      colorMask: isDarkMode ? '#000000cc' : '#ffffffcc',
    }
  }}
>
```
