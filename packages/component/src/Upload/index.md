---
category: Components
title: Upload
group:
  title: Display
  order: 3
---

# Upload 上传组件

文件选择上传

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

### 基础上传示例

<code src="./demos/basic.tsx"></code>

### AWS上传示例

<code src="./demos/AWSUpload.tsx"></code>

## API

| Adjust | Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| add | tips | 上传区域提示文案 | `string \| ReactNode` | Formats supported JPG, JPEG, PNG. Max size 10 MB.Recommend ratio 16:9. |  |
| add | showUploadButton | 是否展示上传按钮 | `boolean` | `true` | - |
| add | uploadText | 上传提示文案 | `string` | Upload | - |
| add | uploadIconColor | 上传icon颜色 | `string` | 默认是主题色,colorPrimary | - |
| add | format | Address format | `boolean \| (input: string) => ReactNode` | `false` | - |
| add | locale | Multilingual settings | `Locale["address"]` | - | - |
| delete | listType | - | - | - | - |
| delete | listType | - | - | - | - |

## 主题变量(Design Tokens)

### 组件Token

| Token 名称       | 描述               | 类型     | 默认值                              |
| ---------------- | ------------------ | -------- | ----------------------------------- |
| colorMessageText | 提示文本的字体颜色 | `string` | 暗黑模式：#8C8C8C 日间模式：#808080 |
| borderColor      | 边框颜色           | `string` | 暗黑模式：#484848 日间模式：#E0E0E0 |
| containerBg      | 上传区域背景颜色   | `string` | 暗黑模式：#8C8C8C 日间模式：#808080 |

### 其他支持的API参考antd

https://ant-design.antgroup.com/components/upload-cn#api
