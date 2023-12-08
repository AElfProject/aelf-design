import { createStyles, css } from 'antd-style'

export default createStyles(({ token }) => {
  return {
    paginationContainer: css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,
    pageContainer: css`
      display: flex;
      grid-gap: 8px;
      align-items: center;
    `,
    pageNumberContainer: css`
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      background-color: ${token.colorBgHover};
      padding: 0 8px;
      border-radius: 4px;
    `
  }
})
