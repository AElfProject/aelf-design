import React from 'react';
import { Tag as AntdTag, TagProps as AntdTagProps } from 'antd';

import useStyles from './style';

export interface TagProps extends AntdTagProps {}

export default function Tag(props: AntdTagProps) {
  const { prefixCls, cx, styles } = useStyles();
  return <AntdTag {...props} className={cx(props.className, styles[prefixCls + '-aelfd-tag'])} />;
}
