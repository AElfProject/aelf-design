import { createStyles } from 'antd-style'

export default createStyles(({ css, token, prefixCls }) => {
  return {
    AelfdUploadContainer: css`
      .${prefixCls}-upload-wrapper {
        width: 100%;
        display: block;
      }
      .${prefixCls}-upload-wrapper .${prefixCls}-upload-select {
        width: 100%;
      }
      .${prefixCls}-upload-wrapper.${prefixCls}-upload-picture-card-wrapper
        .${prefixCls}-upload.${prefixCls}-upload-select,
        .${prefixCls}-upload-wrapper.${prefixCls}-upload-picture-circle-wrapper
        .${prefixCls}-upload.${prefixCls}-upload-select {
        width: 100%;
      }
      .${prefixCls}-upload-wrapper.${prefixCls}-upload-picture-card-wrapper
        .${prefixCls}-upload.${prefixCls}-upload-select,
        .${prefixCls}-upload-wrapper.${prefixCls}-upload-picture-circle-wrapper
        .${prefixCls}-upload.${prefixCls}-upload-select {
        height: 100%;
      }

      .${prefixCls}-upload-wrapper.${prefixCls}-upload-picture-card-wrapper
        .${prefixCls}-upload-list.${prefixCls}-upload-list-picture-card
        .${prefixCls}-upload-list-item-container {
        width: 100%;
        height: 100%;
        margin-block: 0 0px;
        margin-inline: 0 0px;
      }

      .${prefixCls}-upload-wrapper .${prefixCls}-upload-list {
        line-height: normal;
      }

      .${prefixCls}-upload {
        border: none !important;
        margin-inline-end: 0px !important;
        margin-bottom: 0px !important;
      }
    `,
    uploadButton: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      gap: 16px;
      width: 100%;
      min-height: 252px;
      border-radius: 6px;
      padding: 24px;
      border: 1px dashed ${token.customUpload?.borderColor};
      background: ${token.customUpload?.containerBg};
      :hover {
        svg * {
          fill: ${token.colorPrimaryHover} !important;
        }
      }
      :active {
        svg * {
          fill: ${token.colorPrimaryActive} !important;
        }
      }
    `,
    uploadText: css`
      text-align: center;
      font-size: 14px;
      line-height: 22px;
      color: ${token.colorTextBase};
    `,
    message: css`
      color: ${token.customUpload?.colorMessageText};
      text-align: center;
      font-size: 12px;
      line-height: 20px;
    `,
    messageTitle: css`
      text-align: center;
    `,
    messageSubTitle: css`
      text-align: center;
    `,
    previewContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 16px;
      padding: 24px;
      box-sizing: border-box;
      border-radius: 6px;
      border: 1px dashed ${token.customUpload?.borderColor};
      background: ${token.colorBgContainer};
      margin-bottom: 16px;

      .fileName {
        color: ${token.colorTextBase};
        font-size: 14px;
        line-height: 22px;
      }

      .clear-text {
        display: inline-block;
        color: ${token.colorPrimary};
        font-size: 14px;
        font-style: normal;
        line-height: 22px;
        margin-left: 8px;
      }
      .file-info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .clear-container {
        cursor: pointer;
        display: flex;
        align-items: center;

        :hover {
          .clear-text {
            color: ${token.colorPrimaryHover};
          }

          svg * {
            fill: ${token.colorPrimaryHover} !important;
          }
        }
        :active {
          .clear-text {
            color: ${token.colorPrimaryActive};
          }
          svg * {
            fill: ${token.colorPrimaryActive} !important;
          }
        }
      }
    `
  }
})
