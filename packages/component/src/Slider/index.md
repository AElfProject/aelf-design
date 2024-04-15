---
nav: Components
group:
  title: Display
  order: 3
---

# Slider

1. adjust the style: mark text font-size/line-height，slider handle size
2. add `SliderBindInput` component, you can use it to bind input with slider in `Form` or standalone

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Error status

<code src="./demos/error.tsx"></code>

## Slider with mark

<code src="./demos/marks.tsx"></code>

## Slider with input

<code src="./demos/withInput.tsx"></code>

## control not control

<code src="./demos/controlNotControl.tsx"></code>

## Slider in form

<code src="./demos/slideInForm.tsx"></code>

## Token

```js
<ConfigProvider
  theme={{
    components: {
      Slider: {
        /* 这里是你的组件 token */
      },
    },
  }}
>
  ...
</ConfigProvider>
```

## Supported Token

refer to [slider Token](https://ant.design/components/slider-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

### Slider

| Property                                 | Description        | Type      | Default | Version |
| ---------------------------------------- | ------------------ | --------- | ------- | ------- |
| status<Badge type='success'>新增</Badge> | 状态：出错 \| .... | `'error'` | -       |

### SliderBindInput

| Property     | Description        | Type                     | Default | Version |
| ------------ | ------------------ | ------------------------ | ------- | ------- |
| value        | 值                 | number                   | -       | -       |
| onChange     | 监听值改变         | (value: number) => void; | -       | -       |
| defaultValue | 默认值             | number                   | -       | -       |
| status       | 状态：出错 \| .... | `'error'`                | -       | -       |
| className    | 类名               | string                   | -       | -       |
| min          | 最小值             | number                   | 0       | -       |
| max          | 最大值             | number                   | 100     | -       |
| style        | 样式               | React.CSSProperties      | -       | -       |
| sliderProps  | 透传 Slider        | SliderSingleProps        | -       | -       |
| inputProps   | 透传 InputNumber   | InputNumberProps         | -       | -       |

## Supported API

refer to [Button API](https://ant.design/components/button-cn#api)
