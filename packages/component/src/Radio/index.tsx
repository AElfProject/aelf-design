import React, { forwardRef } from 'react';
import { Radio as AntdRadio, CheckboxRef, RadioProps } from 'antd';

import useStyles from './style';

export interface IRadioProps extends RadioProps {}
const InternalRadio = forwardRef<CheckboxRef, IRadioProps>((props: IRadioProps, ref) => {
  const { styles, cx, prefixCls } = useStyles();
  return (
    <AntdRadio ref={ref} {...props} className={cx(prefixCls + '-radio', styles.aelfDesignRadio)} />
  );
});

if (process.env.NODE_ENV !== 'production') {
  InternalRadio.displayName = 'Radio';
}

type computedRadio = typeof InternalRadio & {
  Button: typeof AntdRadio.Button;
  Group: typeof AntdRadio.Group;
};
const Radio = InternalRadio as computedRadio;

Radio.Button = AntdRadio.Button;
Radio.Group = AntdRadio.Group;

export default Radio;
