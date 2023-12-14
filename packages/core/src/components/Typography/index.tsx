import { Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
const { Title, Paragraph, Text, Link } = Typography
import useStyles from './style'
import { TextProps } from 'antd/es/typography/Text'

export enum FontWeightType {
  'Regular' = 'Regular',
  'Medium' = 'Medium',
  'Bold' = 'Bold'
}

export interface IAelfdTitleProps extends Omit<TitleProps, 'level'> {
  fontWeight?: FontWeightType
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export type TextSizeType = 'mini' | 'small' | 'normal'

export interface IAelfdTextProps extends TextProps {
  fontWeight?: FontWeightType
  size?: TextSizeType
}

const FontFamily = {
  [FontWeightType.Regular]: 'RobotoRegular',
  [FontWeightType.Medium]: 'RobotoMedium',
  [FontWeightType.Bold]: 'RobotoBold'
}

function AelfdTitle(props: IAelfdTitleProps) {
  const { fontWeight = FontWeightType.Regular, level } = props
  const titleLevel = level && level > 5 ? 5 : level
  const { styles, cx } = useStyles({
    fontFamily: FontFamily[fontWeight],
    level
  })
  return (
    <Title
      {...props}
      level={titleLevel as 1 | 2 | 3 | 4 | 5}
      className={cx(styles.AelfdTitle, props.className)}
    />
  )
}

function AelfdText(props: IAelfdTextProps) {
  const { fontWeight = FontWeightType.Regular, size = 'normal' } = props
  const { styles, cx } = useStyles({ fontFamily: FontFamily[fontWeight], size })
  return <Text {...props} className={cx(styles.AelfdText, props.className)} />
}

const AelfdTypography = {
  Title: AelfdTitle,
  Paragraph,
  Text: AelfdText,
  Link
}

export default AelfdTypography
