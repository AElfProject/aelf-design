import { createStyles, css } from 'antd-style'

export default createStyles(({ token }, props: { isMobile: boolean }) => {
  const { isMobile } = props
  return {
    paginationContainer: css`
      display: flex;
      flex-shrink: 0;
      flex-direction: ${isMobile ? 'column' : 'row'};
      align-items: ${isMobile ? 'flex-start' : 'center'};
      height: 100%;
      justify-content: space-between;
      .ant-select-focused.ant-select:not(.ant-select-disabled):not(
          .ant-select-customize-input
        ):not(.ant-pagination-size-changer)
        .ant-select-selector {
        border-color: ${token.colorPrimaryActive};
      }

      .ant-select-open .ant-select-arrow {
        rotate: 180deg;
      }
      .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-color: ${token.colorTextDisabled};
      }
    `,
    pageContainer: css`
      display: flex;
      grid-gap: 8px;
      margin-top: ${isMobile ? '8px' : '0px'};
      align-items: center;
    `,
    pageNumberContainer: css`
      display: flex;
      align-items: center;
      height: 32px;
      justify-content: center;
      background-color: ${token.colorBgHover};
      padding: 0 8px;
      border-radius: 4px;

      color: ${token.colorTextSecondary};
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
      .ant-select-selector {
        padding: 0 8px !important;
        border-radius: 4px;
      }

      .ant-select-selection-item,
      .ant-select-selection-placeholder {
        padding-inline-end: 20px !important;
      }
      .ant-select-arrow {
        color: ${token.colorDownArrow};
      }
    `,
    pageSizePopup: css`
      padding: 5px 0;
      border-radius: 6px;
      .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background-color: ${token.colorBgPage};
        color: ${token.colorPrimary};
      }
      .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
        background-color: ${token.colorBgHover};
      }
      .ant-select-item {
        padding: 5px 12px;
        line-height: 22px;
        border-radius: 0px;
      }
    `
  }
})
