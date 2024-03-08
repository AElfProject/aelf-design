---
nav: Components
group:
  title: Display
  order: 3
---

# Collapse

1. customize expandIcon props
2. customize expandIconPosition props

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Token

```js
<AELFDProvider
  theme={{
    components:{
      Collapse: {
        headerBg: appearance === 'dark' ? '#1A1A1A' : '#FFFFFF',
        contentPadding: '16px 24px',
        headerPadding: '16px 24px',
      },
    }
  }}
  customToken={{
    customCollapse:{
      headerHoverBg: isDarkMode ? '#212121' : '#f8f8f8',
      headerClickBg: isDarkMode ? '#212121' : '#f8f8f8',
    }
  }}
>
```

## Supported Token

refer to [Collapse Token](https://ant.design/components/collapse-cn#%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8Fdesign-token)

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| expandIcon<Badge type='error'>删除</Badge> | 自定义切换图标 | `(panelProps) => ReactNode` | `1.0.0` |
| expandIconPosition<Badge type='error'>删除</Badge> | 设置图标位置 | `number` | `start \| end` | `1.0.0` |

## Supported API

refer to [Collapse API](https://ant.design/components/collapse-cn#api)
