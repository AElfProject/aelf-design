import { Collapse, CollapseProps } from 'antd'
import { createStyles } from 'antd-style'

const useStyles = createStyles(({ css, token }) => {
  const { headerClickBg, headerHoverBg, contentClickBg, contentHoverBg } =
    token.Collapse
  return {
    aelfdCollapse: css`
      .ant-collapse-header-text {
        line-height: 24px;
      }
      .ant-collapse-expand-icon {
        float: right;
        position: absolute;
        right: 12px;
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
      .ant-collapse-content {
        &:hover {
          background-color: ${contentHoverBg};
        }
        &:active {
          color: #127fff;
          background-color: ${contentClickBg};
        }
      }
    `
  }
})

export interface AelfdCollapseProps extends CollapseProps {
  className?: string
}

const AelfdCollapse = ({ className, ...rest }: AelfdCollapseProps) => {
  const { styles: st } = useStyles()
  return (
    <Collapse {...rest} className={`${st.aelfdCollapse} ${className || ''}`} />
  )
}

export default AelfdCollapse
