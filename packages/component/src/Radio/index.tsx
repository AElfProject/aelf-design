import React from 'react';
import { Radio as AntdRadio, RadioProps } from 'antd';

import useStyles from './style';

export interface IRadioProps extends RadioProps {}
function Radio(props: IRadioProps) {
  const { styles, cx, prefixCls } = useStyles();
  return <AntdRadio {...props} className={cx(prefixCls + '-radio', styles.aelfDesignRadio)} />;
}

Radio.Button = AntdRadio.Button;
Radio.Group = AntdRadio.Group;

export default Radio;
