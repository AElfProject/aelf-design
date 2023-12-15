import { Collapse, CollapseProps } from 'antd'
import { createStyles } from 'antd-style'
import DownArrow from 'assets/downArrow.svg?react'
const useStyles = createStyles(({ css, token }) => {
  const { Collapse: collapseTokens } = token
  const { headerClickBg = '', headerHoverBg = '' } = collapseTokens
  return {
    aelfdCollapse: css`
      .ant-collapse-header-text {
        line-height: 24px;
      }
      .ant-collapse-content-box {
        line-height: 22px;
      }
      .ant-collapse-header {
        &:hover {
          background-color: ${headerHoverBg};
        }
        &:active {
          color: #127fff;
          background-color: ${headerClickBg};
        }
      }
      .ant-collapse-item:first-child {
        .ant-collapse-header:hover {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
      }
    `
  }
})

export interface AelfdCollapseProps
  extends Omit<CollapseProps, 'expandIcon' | 'expandIconPosition'> {
  className?: string
}

const AelfdCollapse = ({ className, ...rest }: AelfdCollapseProps) => {
  const { styles: st, cx } = useStyles()
  return (
    <Collapse
      {...rest}
      expandIcon={({ isActive }) => (
        <DownArrow className={cx('duration-300', isActive && 'rotate-180')} />
      )}
      expandIconPosition={'end'}
      className={cx(st.aelfdCollapse, className)}
    />
  )
}

AelfdCollapse.Panel = Collapse.Panel
export default AelfdCollapse
