import React from 'react';
import { Progress as AntdProgress, ProgressProps } from 'antd';

import useStyles from './style';

export interface IProgressProps extends ProgressProps {}

function Progress({ showInfo = false, className, ...rest }: IProgressProps) {
  const { styles: st, cx, prefixCls } = useStyles();

  return (
    <AntdProgress
      {...rest}
      showInfo={showInfo}
      className={cx(st.progressWrap, className, prefixCls + '-aelfd-progress')}
    />
  );
}

export default Progress;
