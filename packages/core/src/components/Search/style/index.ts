import { createStyles } from 'antd-style'
import { InputSizeType } from 'components/Input/index'
import { WithSearchIconType } from 'components/Search'

const useStyles = createStyles(
  (
    { css, token, prefixCls },
    {
      prefixWidth = 0,
      inputSize = 'middle',
      withSearchIcon
    }: {
      prefixWidth?: number
      inputSize?: InputSizeType
      withSearchIcon?: WithSearchIconType
    }
  ) => {
    const flexCenter = css`
      display: flex;
      align-items: center;
    `
    const searchBtnBase = css`
      cursor: pointer;
      height: ${inputSize === 'middle' ? '48px' : '40px'};
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${token.colorPrimary};
      border-radius: ${inputSize === 'middle' ? '6px' : '4px'};
      border-start-start-radius: ${withSearchIcon === 'connect' && 0};
      border-end-start-radius: ${withSearchIcon === 'connect' && 0};
      &:hover {
        background-color: ${token.colorPrimaryHover};
      }
      &:active {
        background-color: ${token.colorPrimaryActive};
      }
      svg {
        color: #ffffff;
      }
    `

    return {
      search: css`
        position: relative;
        display: flex;
        align-items: center;
        gap: ${withSearchIcon === 'after' ? '8px' : 0};
        .${prefixCls}-input-group-wrapper-status-error
          .${prefixCls}-input-group-addon {
          color: inherit;
          border-color: inherit;
        }
      `,
      searchDropDownWrap: css`
        ${flexCenter};
      `,
      searchDropDownLeft: css`
        ${flexCenter}
        cursor: pointer;
        margin-right: 12px;
        width: ${prefixWidth > 0 ? prefixWidth + 'px' : 'auto'};
      `,
      searchDropDownLeftLabel: css`
        margin-right: 8px;
      `,
      searchDropDownRight: css`
        ${flexCenter}
        padding-left: 12px;
        border-left: 1px solid ${token.colorBorder};
      `,
      searchInput: css`
        flex: 1;
        .${prefixCls}-input-affix-wrapper {
          border-start-end-radius: ${withSearchIcon === 'connect' && 0};
          border-end-end-radius: ${withSearchIcon === 'connect' && 0};
        }
      `,
      searchBtn: css`
        ${searchBtnBase}
      `,
      searchBtnInline: css`
        ${searchBtnBase};
        width: 32px;
        height: 32px;
        padding: 0;
        border-radius: 2px;
      `,
      searchBtnDisabled: css`
        cursor: not-allowed;
        background-color: ${token.colorTextDisabled};
        &:hover {
          background-color: ${token.colorTextDisabled};
        }
        &:active {
          background-color: ${token.colorTextDisabled};
        }
      `
    }
  }
)

export default useStyles
