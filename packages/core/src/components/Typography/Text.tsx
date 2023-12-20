import { TextProps } from 'antd/es/typography/Text'
import useStyles from './style'
import { Typography } from 'antd'
import { FontFamily, FontWeightType } from './index'
import React, { Ref } from 'react'
const { Text: AntdText } = Typography

export type TextSizeType = 'mini' | 'small' | 'normal'

export interface ITextProps extends TextProps {
  fontWeight?: FontWeightType
  size?: TextSizeType
}

function Text(props: ITextProps, ref: Ref<HTMLSpanElement> | undefined) {
  const { fontWeight = FontWeightType.Regular, size = 'normal' } = props
  const { styles, cx } = useStyles({ fontFamily: FontFamily[fontWeight], size })
  return (
    <AntdText
      {...props}
      ref={ref}
      className={cx(styles.AelfDesignText, props.className)}
    />
  )
}

export default React.forwardRef(Text)
