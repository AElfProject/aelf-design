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

<code src="./demos/basic.tsx">basic upload</code>

### AWS

Please fill in your AWS configuration before trying to upload

<code src="./demos/AWSUpload.tsx">AWS upload</code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| tips<Badge type="success">add</Badge> | Upload regional prompt copy | `string \| ReactNode` | Formats supported JPG, JPEG, PNG. Max size 10 MB.Recommend ratio 16:9. | `1.0.0`&nbsp; |
| showUploadButton<Badge type="success">add</Badge> | Whether to display the upload button | `boolean` | `true` | `1.0.0` |
| uploadText<Badge type="success">add</Badge> | Upload prompt copy | `string` | Upload | `1.0.0` |
| uploadIconColor<Badge type="success">add</Badge> | Upload icon color | `string` | The default is the theme color, colorPrimary | `1.0.0` |
| format<Badge type="success">add</Badge> | Address format | `boolean \| (input: string) => ReactNode` | `false` | `1.0.0` |
| locale<Badge type="success">add</Badge> | Multilingual settings | `Locale["address"]` | - | `1.0.0` |
| listType<Badge type="error">delete</Badge> | - | - | - | `1.0.0` |
| itemRender<Badge type="error">delete</Badge> | - | - | - | `1.0.0` |

## Design Token

### Component Token

```js
<AELFDProvider
  customTokens={
    customUpload: {
      borderColor: isDarkMode ? '#484848' : '#E0E0E0',
      containerBg: isDarkMode ? '#212121' : '#F8F8F8',
      colorFileText: isDarkMode ? '#fff' : '#070A26',
      colorMessageText: isDarkMode ? '#8C8C8C' : '#808080',
    },
  }
 />
```

| Token name       | Description                     | Type     | Default |
| ---------------- | ------------------------ | -------- | ------ |
| colorMessageText | Font color of prompt text       | `string` |        |
| borderColor      | Border color                 | `string` |        |
| containerBg      | Upload area background color         | `string` |        |
| colorFileText    | File preview tips copywriting font color | `string` |        |

### Supported API

refer to [Upload API](https://ant-design.antgroup.com/components/upload-cn#api)
