import { createStyles } from 'antd-style'
import { DropdownSizeType } from '../Dropdown'

const useStyles = createStyles(
  (
    { css, token, prefixCls },
    {
      size,
      offsetX,
      offsetY
    }: { size: DropdownSizeType; offsetX: number; offsetY: number }
  ) => {
    const dynamicVal =
      size === 'small'
        ? '5px'
        : size === 'medium'
        ? '9px'
        : size === 'default'
        ? '13px'
        : '17px'
    return {
      dropDownWrap: css`
        min-width: auto !important;
        & .${prefixCls}-dropdown-menu {
          margin-left: ${offsetX}px;
          margin-top: ${offsetY}px;
          border-radius: 6px;
          padding: 0;
          overflow: hidden;
          box-shadow: none;
          border: 1px solid ${token.colorPrimaryBorder};
          .${prefixCls}-dropdown-menu-item {
            padding: ${dynamicVal} 12px;
            border-radius: 0;
            /* &:hover ~ li {
              background: none;
            } */
          }
        }
      `
    }
  }
)

export default useStyles
