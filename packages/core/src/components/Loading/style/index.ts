import { createStyles } from 'antd-style'

const useStyles = createStyles(({ css }) => {
  return {
    loadingWrap: css`
      width: 100%;
    `,
    loadingInner: css`
      min-width: 56px;
      display: flex;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
    `
  }
})

export default useStyles
