import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css, prefixCls }) => {
  const { handleLineWidth = 1, handleLineWidthHover = 2 } = (token as any).Slider ?? {};
  return {
    sliderWrap: css`
      // error
      &.${prefixCls}-slider-error .${prefixCls}-slider-handle::after {
        box-shadow: 0 0 0 ${handleLineWidth}px ${token.colorErrorBorder};
      }
      &.${prefixCls}-slider-error .${prefixCls}-slider-handle:hover::after {
        box-shadow: 0 0 0 ${handleLineWidthHover}px ${token.colorError};
      }
      &.${prefixCls}-slider-error .${prefixCls}-slider-handle:active::after {
        box-shadow: 0 0 0 ${handleLineWidthHover}px ${token.colorError};
      }
      &.${prefixCls}-slider-error .${prefixCls}-slider-track {
        background-color: ${token.colorErrorBorder};
      }
      &.${prefixCls}-slider-error:hover .${prefixCls}-slider-track {
        background-color: ${token.colorErrorHover};
      }
      .${prefixCls}-slider-mark-text {
        font-size: 12px;
        line-height: 20px;
      }
    `,
  };
});
const useSlideBindInputStyles = createStyles(({ token, css, prefixCls, isDarkMode }) => {
  return {
    wrap: css`
      display: flex;
      height: 48px;
      align-items: center;
    `,
    slider: css`
      flex: 1;
    `,
    sliderInput: css`
      margin-left: 24px;
      flex: 0 0 34%;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      .${prefixCls}-input-number {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-right: 45px; // 56 - 11
      }
      .${prefixCls}-input-number-input-wrap {
        width: 100%;
      }
    `,
    suffix: css`
      display: flex;
      align-items: center;
      font-size: 16px;
      position: absolute;
      right: 12px;
    `,
    clear: css`
      cursor: pointer;
    `,
    unit: css`
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${isDarkMode ? '#4F4F4F' : '#D6D6D6'};
      margin-left: 8px;
    `,
  };
});
export { useSlideBindInputStyles };
export default useStyles;
