import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => {
  return {
    datePickerForMobileWrap: css`
      height: 344px;
      color: ${token?.colorTextBase};
      background-color: ${token?.colorBgElevated};
      .adm-picker-header-button {
        color: ${token?.colorPrimary};
      }
      .adm-picker-header {
        border-bottom: none;
      }
      .adm-picker-view-column-item {
        padding: 0 3px;
      }
      .adm-picker-header {
        padding: 16px 16px 8px 16px;
      }
      .adm-picker-view {
        background-color: ${token?.colorBgElevated};
      }
      .adm-picker-view-mask-top,
      .adm-picker-view-mask-bottom {
        background-color: ${token?.colorBgElevated};
      }
    `,
  };
});

export default useStyles;
