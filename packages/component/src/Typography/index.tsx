import React from 'react';
import { Typography as AntdTypography } from 'antd';

// const { Paragraph, Link } = antdTypography

import Text from './Text';
import Title from './Title';

export enum FontWeightEnum {
  Regular = 400,
  Medium = 500,
  Bold = 700,
}

function Typography() {
  return <AntdTypography />;
}

Typography.Title = Title;
Typography.Text = Text;
// Typography.Paragraph = Paragraph
// Typography.Link = Link

export default Typography;
