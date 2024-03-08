---
category: Components
title: Upload
group:
  title: Display
  order: 3
---

# Upload

Upload the file by selecting

## When To Use

Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

- When you need to upload one or more files.
- When you need to upload one or more files.

## Examples

### basic

<code src="./demos/basic.tsx"></code>

### AWS

Please fill in your AWS configuration before trying to upload

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
| delete | itemRender | - | - | - | - |

## Design Token

### Component Token

| Token 名称       | 描述               | 类型     | 默认值                              |
| ---------------- | ------------------ | -------- | ----------------------------------- |
| colorMessageText | 提示文本的字体颜色 | `string` | 暗黑模式：#8C8C8C 日间模式：#808080 |
| borderColor      | 边框颜色           | `string` | 暗黑模式：#484848 日间模式：#E0E0E0 |
| containerBg      | 上传区域背景颜色   | `string` | 暗黑模式：#8C8C8C 日间模式：#808080 |

### 其他支持的API参考antd

https://ant-design.antgroup.com/components/upload-cn#api
