import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => {
  return {
    uploadButton: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      gap: 16px;
      width: 100%;
      box-sizing: border-box;
      min-height: 252px;
      border-radius: 6px;
      padding: 24px;
      border: 1px dashed ${token.customUpload?.borderColor};
      background: ${token.customUpload?.containerBg};
      :hover {
        border-color: ${token.colorPrimaryHover};
      }
      :active {
        border: ${token.colorPrimaryActive};
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
  };
});
