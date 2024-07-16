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
| stepsData | Step data | [IStepItem[]](#istepitem) | - | `1.0.0` |
| desc | Pop-up window description information | `ReactNode` | - | `1.0.0` |
| strokeColor | Success progress bar color | `string` | Follow the main color of the `progress` component | `1.0.0` |
| strokeErrorColor | Failure progress bar color | `string` | Follow the `error` color of the `progress` component | `1.0.0` |
| trailColor | Progress bar background color | `string` | Follow the `progress` component `trailColor` color | `1.0.0` |
| successIcon | Success steps icons | `ReactNode` | `<ProgressSuccessIcon />` | `1.0.0` |
| errorIcon | Failed step icon | `ReactNode` | `<ProgressErrorIcon />` | `1.0.0` |

### IStepItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | Set title | `ReactNode` | - | `1.0.0` |
| subTitle | Set subTitle | `ReactNode` | - | `1.0.0` |
| percent | Current step progress bar percentage | `number` | - | `1.0.0` |
| progressTip | Text description below the progress bar of the current step | `ReactNode` | - | `1.0.0` |
| status | Current step status | [ProgressLineType](#progresslinetype) | - | `1.0.0` |
| available | Control whether the copy of the current step is black or gray | `boolean` | - | `1.0.0` |

### ProgressLineType

```js
type ProgressLineType = 'exception' | 'normal';
```
