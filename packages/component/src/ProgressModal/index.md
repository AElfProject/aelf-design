---
nav: Components
group:
  title: Display
  order: 3
---

# ProgressModal

<Badge type='success'>aelf-design</Badge> aelf-design own component

## Basic Usage

<code src="./demos/basic.tsx"></code>

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| stepsData | 步骤数据 | [IStepItem[]](#istepitem) | - | `1.0.0` |
| desc | 弹窗描述信息 | `ReactNode` | - | `1.0.0` |
| strokeColor | 成功进度条颜色 | `string` | 跟随`progress`组件主色 | `1.0.0` |
| strokeErrorColor | 失败进度条颜色 | `string` | 跟随`progress`组件`error`色 | `1.0.0` |
| trailColor | 进度条底色 | `string` | 跟随`progress`组件`trailColor`色 | `1.0.0` |
| successIcon | 成功步骤图标 | `ReactNode` | `<ProgressSuccessIcon />` | `1.0.0` |
| errorIcon | 失败步骤图标 | `ReactNode` | `<ProgressErrorIcon />` | `1.0.0` |

### IStepItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | 设置title | `ReactNode` | - | `1.0.0` |
| subTitle | 设置subTitle | `ReactNode` | - | `1.0.0` |
| percent | 当前步骤进度条百分比 | `number` | - | `1.0.0` |
| progressTip | 当前步骤进度条下方文本描述 | `ReactNode` | - | `1.0.0` |
| status | 当前步骤状态 | [ProgressLineType](#progresslinetype) | - | `1.0.0` |
| available | 控制当前步骤文案黑色还是灰色 | `boolean` | - | `1.0.0` |

### ProgressLineType

```js
type ProgressLineType = 'exception' | 'normal';
```
