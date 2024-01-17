import { Typography as AntdTypography } from 'antd'

// const { Paragraph, Link } = antdTypography

import Text from './Text'
import Title from './Title'

export enum FontWeightEnum {
  'Regular' = 'Regular',
  'Medium' = 'Medium',
  'Bold' = 'Bold'
}

export const FontFamily = {
  [FontWeightEnum.Regular]: 'RobotoRegular',
  [FontWeightEnum.Medium]: 'RobotoMedium',
  [FontWeightEnum.Bold]: 'RobotoBold'
}

function Typography() {
  return <AntdTypography />
}

Typography.Title = Title
Typography.Text = Text
// Typography.Paragraph = Paragraph
// Typography.Link = Link

export default Typography
