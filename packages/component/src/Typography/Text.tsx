import React, { Ref } from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

import { FontWeightEnum } from './index';
import useStyles from './style';

const { Text: AntdText } = Typography;

export type TextSizeType = 'mini' | 'small' | 'normal';

export interface ITextProps extends TextProps {
  fontWeight?: FontWeightEnum;
  size?: TextSizeType;
}

function Text(props: ITextProps, ref: Ref<HTMLSpanElement> | undefined) {
  const { fontWeight = FontWeightEnum.Regular, size = 'normal' } = props;
  const { styles, cx } = useStyles({ fontFamily: fontWeight, size });
  return <AntdText {...props} ref={ref} className={cx(styles.AelfDesignText, props.className)} />;
}

export default React.forwardRef(Text);
