import { createStyles } from 'antd-style'
import '../../styles/fonts.css'
import { TextSizeType } from './Text'
export default createStyles(
  (
    { css },
    props: {
      fontFamily: string
      size?: TextSizeType
      level?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ) => {
    const { fontFamily, size = 'normal', level } = props
    let lineHeight = 0
    let fontSize = 0
    switch (level) {
      case 1:
        fontSize = 56
        lineHeight = 64
        break
      case 2:
        fontSize = 48
        lineHeight = 56
        break
      case 3:
        fontSize = 40
        lineHeight = 48
        break
      case 4:
        fontSize = 32
        lineHeight = 40
        break
      case 5:
        fontSize = 24
        lineHeight = 32
        break
      case 6:
        fontSize = 20
        lineHeight = 28
        break
      case 7:
        fontSize = 16
        lineHeight = 24
        break
      default:
        break
    }
    return {
      AelfDesignTitle: css`
        font-family: ${fontFamily};
        font-size: ${fontSize}px !important;
        line-height: ${lineHeight}px !important;
        font-weight: normal !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      `,
      AelfDesignText: css`
        font-family: ${fontFamily};
        font-weight: normal !important;
        display: inline-block;
        font-size: ${size === 'normal'
          ? '14px'
          : size === 'small'
          ? '12px'
          : '10px'};
        line-height: ${size === 'normal'
          ? '22px'
          : size === 'small'
          ? '20px'
          : '18px'};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `
    }
  }
)
