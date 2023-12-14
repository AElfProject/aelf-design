import { createStyles } from 'antd-style'
import { AelfdDropdownSizeType } from '../Dropdown'

const useStyles = createStyles(
  (
    { css },
    {
      size,
      offsetX,
      offsetY
    }: { size: AelfdDropdownSizeType; offsetX: number; offsetY: number }
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
        & .ant-dropdown-menu {
          margin-left: ${offsetX}px;
          margin-top: ${offsetY}px;
          border-radius: 6px;
          padding: 0;
          overflow: hidden;
          .ant-dropdown-menu-item {
            padding: ${dynamicVal} 12px;
            border-radius: 0;
            /* &:hover ~ li {
              background: none;
            } */
          }
          /* .ant-dropdown-menu-item-selected:hover {
          background-color: transparent;
        } */
        }
      `
    }
  }
)

export default useStyles
