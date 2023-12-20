import { Typography as AntdTypography } from 'antd'

// const { Paragraph, Link } = antdTypography

import Text from './Text'
import Title from './Title'

export enum FontWeightType {
  'Regular' = 'Regular',
  'Medium' = 'Medium',
  'Bold' = 'Bold'
}

export const FontFamily = {
  [FontWeightType.Regular]: 'RobotoRegular',
  [FontWeightType.Medium]: 'RobotoMedium',
  [FontWeightType.Bold]: 'RobotoBold'
}

function Typography() {
  return <AntdTypography />
}

Typography.Title = Title
Typography.Text = Text
// Typography.Paragraph = Paragraph
// Typography.Link = Link

export default Typography
