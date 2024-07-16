---
nav: Components
group:
  title: Display
  order: 3
---

# Progress

1. customize style
2. set `showInfo` false by default

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider theme={{
  components:{
    Progress: {
        // The color of the remaining part of the progress bar
      remainingColor: appearance === 'dark' ? '#282828' : '#F5F5F5',
        // Token sequence indicating successful operation
      colorSuccess: appearance === 'dark' ? '#1370DD' : '#127FFF',
        // Progress bar default color, main color
      defaultColor: appearance === 'dark' ? '#1370DD' : '#127FFF',
    }
  }
}}>
```

## Supported Token

refer to [Progress Token](https://ant.design/components/progress-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| showInfo<Badge type='warning'>Revise</Badge> | Whether to display progress values ​​or status icons | `boolean` | `false` | `1.0.0` |

## Supported API

refer to [Progress API](https://ant.design/components/progress-cn#api)
