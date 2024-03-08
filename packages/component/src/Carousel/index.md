---
nav: Components
title: Carousel
group:
  title: Display
  order: 3
---

# Carousel

## Examples

<code src="./demos/basic.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| data | 轮播图数据，URL是必传的 | `ICarouselSlideItem { url: string [key: string]: any}[]` | `{ headClip: 6, tailClip: 4 }` | - |
| galleryObjectFit | gallery图片展示规则 | `fill \| contain \| cover \| none \| scale-down` | `cover` | - |
| thumbsSlidesPerView | thumbs一页展示多少条 | `number` | 5 | - |
| onSlideClick | 点击轮播图片触发事件，返回值是当前点击的图片ICarouselSlideItem对象 | `(value: ICarouselSlideItem) => void` | - |

## 本期暂未涉及token
