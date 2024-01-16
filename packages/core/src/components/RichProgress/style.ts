import { createStyles } from 'antd-style'

export default createStyles(({ css, token, responsive, prefixCls }) => {
  return {
    progressStepsContainer: css`
      display: flex;
      color: ${token.customRichProgress?.colorText};
      gap: 2px;
      flex-direction: row;
      ${responsive.md} {
        flex-direction: column;
        gap: 32px;
      }
    `,
    progressSteps: css`
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0;
    `,
    progressStepItem: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    `,
    flex: css`
      display: flex;
    `,
    relative: css`
      position: relative;
    `,
    stepIcon: css`
      flex-shrink: 0;
      svg {
        display: block;
      }
      &::after {
        display: none;
        content: '';
        position: absolute;
        left: 12px;
        top: 24px;
        bottom: -32px;
        width: 2px;
        background-color: ${token.customRichProgress?.progressLineBg};
        ${responsive.md} {
          display: block;
        }
      }
      circle {
        stroke: ${token.customRichProgress?.colorText} !important;
        ${responsive.md} {
          stroke: ${token.customRichProgress?.progressLineBg} !important;
        }
      }
      .${prefixCls}-progress-text {
        color: ${token.customRichProgress?.colorText};
        font-size: 12px;
        font-weight: 500;
      }
      .${prefixCls}-progress-circle-path {
        stroke: ${token.customRichProgress?.progressLineColor} !important;
      }
    `,
    progressIconTextDisabled: css`
      circle {
        stroke: ${token.customRichProgress?.colorTextSecondary} !important;
      }
      .${prefixCls}-progress-text {
        color: ${token.customRichProgress?.colorTextSecondary};
      }
    `,
    stepIconSuccess: css`
      &::after {
        background-color: ${token.customRichProgress?.progressLineColor};
      }
    `,
    progressLast: css`
      &::after {
        display: none;
      }
    `,
    progressText: css`
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      padding-right: 24px;
      ${responsive.md} {
        margin-left: 8px;
        padding-right: 0;
      }
    `,
    progressTitle: css`
      font-size: 16px;
      line-height: 24px;
      font-weight: 500px;
      word-break: break-all;
      color: ${token.customRichProgress?.colorText};
    `,
    progressTitleDisabled: css`
      color: ${token.customRichProgress?.colorTextSecondary};
    `,
    progressSubTitle: css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: ${token.customRichProgress?.colorTextSecondary};
      word-break: break-all;
    `,
    progressTip: css`
      color: ${token.customRichProgress?.colorTextSecondary};
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      display: block;
      word-break: break-all;
    `,
    progressBar: css``,
    progressBarFirst: css`
      .${prefixCls}-progress-inner {
        border-top-left-radius: 100px !important;
        border-bottom-left-radius: 100px !important;
      }
      &.progressBarLast {
        .${prefixCls}-progress-inner {
          border-top-left-radius: 100px !important;
          border-bottom-left-radius: 100px !important;
          border-top-right-radius: 100px !important;
          border-bottom-right-radius: 100px !important;
        }
      }
    `,
    progressBarLast: css`
      .${prefixCls}-progress-inner {
        border-top-right-radius: 100px !important;
        border-bottom-right-radius: 100px !important;
      }
    `,
    progressStepNum: css`
      margin-top: 12px;
      display: flex;
      align-items: center;
      flex-direction: column;
      ${responsive.md} {
        display: none;
      }
    `,
    stepNumText: css`
      color: ${token.customRichProgress?.colorText};
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
    `,
    stepNumTextDisabled: css`
      color: ${token.customRichProgress?.colorTextSecondary};
    `,
    successIcon: css`
      path {
        fill: ${token.customRichProgress?.progressLineColor};
      }
    `,
    errorIcon: css`
      path {
        fill: ${token.customRichProgress?.progressLineErrorColor};
      }
    `
  }
})
