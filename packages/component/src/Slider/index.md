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
| status<Badge type='success'>New</Badge> | Status: Error \| .... | `'error'` | -       |

### SliderBindInput

| Property     | Description        | Type                     | Default | Version |
| ------------ | ------------------ | ------------------------ | ------- | ------- |
| value        | value                 | number                   | -       | -       |
| onChange     | Listen for value changes         | (value: number) => void; | -       | -       |
| defaultValue | Default value             | number                   | -       | -       |
| status       | Status: Error \| .... | `'error'`                | -       | -       |
| className    | Class name               | string                   | -       | -       |
| min          | Minimum value             | number                   | 0       | -       |
| max          | Maximum value             | number                   | 100     | -       |
| style        | Style               | React.CSSProperties      | -       | -       |
| sliderProps  | Penetrate Slider        | SliderSingleProps        | -       | -       |
| inputProps   | Penetrate InputNumber   | InputNumberProps         | -       | -       |

## Supported API

refer to [Button API](https://ant.design/components/button-cn#api)
