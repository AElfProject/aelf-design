---
nav: Icons
group:
  title: Display
  order: 3
---

## How to use

To use the icon component you need to install [@aelf-design/icons](https://github.com/AElfProject/aelf-design/tree/main/packages/icons) Icon component package:

<InstallDependencies npm='npm install @aelf-design/icons --save' yarn='yarn add @aelf-design/icons' pnpm='pnpm install @aelf-design/icons --save'></InstallDependencies>

## Icon List

<IconSearch></IconSearch>

## Basic Usage

<code src="./iconDemos/basic.tsx">Basic usage</code> <code src="./iconDemos/customColor.tsx">Custom icon color</code> <code src="./iconDemos/custom.tsx">Custom icon</code>

## API

| Property    | Description                   | Type            | Default | Version |
| ----------- | ----------------------------- | --------------- | ------- | ------- |
| color       | Base color                      | `string`        |         | `1.0.0` |
| hoverColor  | Hover color                     | `string`        |         | `1.0.0` |
| activeColor | Click color                      | `string`        |         | `1.0.0` |
| style       | Set the style of the icon, such as fontSize | `CSSProperties` |         | `1.0.0` |
| className   | Calculated svg class name             | `CSSProperties` |         | `1.0.0` |
