import React, { Ref } from 'react'
import useStyles from './style'
import { Typography } from 'antd'
const { Title } = Typography
import { TitleProps } from 'antd/es/typography/Title'
import { FontFamily, FontWeightType } from './index'
export interface IAelfdTitleProps extends Omit<TitleProps, 'level'> {
  fontWeight?: FontWeightType
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

function AelfdTitle(
  props: IAelfdTitleProps,
  ref: Ref<HTMLSpanElement> | undefined
) {
  const { fontWeight = FontWeightType.Regular, level } = props
  const titleLevel = level && level > 5 ? 5 : level
  const { styles, cx } = useStyles({
    fontFamily: FontFamily[fontWeight],
    level
  })
  return (
    <Title
      {...props}
      ref={ref}
      level={titleLevel as 1 | 2 | 3 | 4 | 5}
      className={cx(styles.AelfDesignTitle, props.className)}
    />
  )
}

export default React.forwardRef(AelfdTitle)
