import { createStyles } from 'antd-style'

export default createStyles(({ token, css, responsive, prefixCls }) => {
  return {
    paginationContainer: css`
      display: flex;
      flex-shrink: 0;
      flex-direction: row;
      align-items: 'center';
      height: 100%;
      justify-content: space-between;
      ${responsive.md} {
        flex-direction: column;
        align-items: flex-start;
      }
      .${prefixCls}-select-focused.${prefixCls}-select:not(.${prefixCls}-select-disabled):not(
          .${prefixCls}-select-customize-input
        ):not(.${prefixCls}-pagination-size-changer)
        .${prefixCls}-select-selector {
        border-color: ${token.colorPrimaryActive};
      }

      .${prefixCls}-select-open .${prefixCls}-select-arrow {
        rotate: 180deg;
      }
      .${prefixCls}-select:not(.${prefixCls}-select-customize-input)
        .${prefixCls}-select-selector {
        border-color: ${token.colorTextDisabled};
      }
    `,
    pageContainer: css`
      display: flex;
      grid-gap: 8px;
      margin-top: 0;
      ${responsive.md} {
        margin-top: 12px;
      }
      align-items: center;
    `,
    pageNumberContainer: css`
      display: flex;
      align-items: center;
      height: 32px;
      justify-content: center;
      background-color: ${token.customPagination?.colorBgHover};
      padding: 0 8px;
      border-radius: 4px;

      color: ${token.customPagination?.colorTextSecondary};
      font-size: 12px;
      line-height: 20px;
    `,
    pagesizeLabel: css`
      font-size: 12px;
      line-height: 20px;
      color: ${token.colorTextBase};
    `,
    records: css`
      margin-left: 8px;
    `,
    paginationButton: css`
      padding: 0 8px;
    `,
    pagesizeSelect: css`
      .${prefixCls}-select-selector {
        padding: 0 8px !important;
        border-radius: 4px;
      }

      .${prefixCls}-select-selection-item,
        .${prefixCls}-select-selection-placeholder {
        padding-inline-end: 20px !important;
      }
      .${prefixCls}-select-arrow {
        color: ${token.customPagination?.colorDownArrow};
      }
    `,
    pageSizePopup: css`
      padding: 5px 0;
      border-radius: 6px;
      .${prefixCls}-select-item-option-selected:not(.${prefixCls}-select-item-option-disabled) {
        background-color: ${token.colorBgContainer};
        color: ${token.colorPrimary};
      }
      .${prefixCls}-select-item-option-active:not(.${prefixCls}-select-item-option-disabled) {
        background-color: ${token.customPagination?.colorBgHover};
      }
      .${prefixCls}-select-item {
        padding: 5px 12px;
        line-height: 22px;
        border-radius: 0px;
      }
    `
  }
})
