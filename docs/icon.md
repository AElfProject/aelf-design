---
nav: Icons
group:
  title: Display
  order: 3
---

## How to use

使用图标组件，你需要安装 [@aelf-design/icons](https://github.com/AElf-devops/aelf-design/tree/main/packages/icons) 图标组件包：

<InstallDependencies npm='npm install @aelf-design/icons --save' yarn='yarn add @aelf-design/icons' pnpm='pnpm install @aelf-design/icons --save'></InstallDependencies>

## Icon List

<IconSearch></IconSearch>

## Basic Usage

<code src="./iconDemos/basic.tsx">基本用法</code> <code src="./iconDemos/customColor.tsx">自定义图标颜色</code> <code src="./iconDemos/custom.tsx">自定义图标</code>

## API

| Property    | Description                   | Type            | Default | Version |
| ----------- | ----------------------------- | --------------- | ------- | ------- |
| color       | 基础颜色                      | `string`        |         | `1.0.0` |
| hoverColor  | hover颜色                     | `string`        |         | `1.0.0` |
| activeColor | 点击颜色                      | `string`        |         | `1.0.0` |
| style       | 设置图标的样式，例如 fontSize | `CSSProperties` |         | `1.0.0` |
| className   | 计算后的 svg 类名             | `CSSProperties` |         | `1.0.0` |
