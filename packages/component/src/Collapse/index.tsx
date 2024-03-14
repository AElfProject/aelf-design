import React from 'react';
import { DownArrowIcon } from '@aelf-design/internal-icons';
import { Collapse as AntdCollapse, CollapseProps } from 'antd';

import useStyles from './style';

export interface ICollapseProps extends Omit<CollapseProps, 'expandIcon' | 'expandIconPosition'> {
  className?: string;
}

function Collapse({ className, ...rest }: ICollapseProps) {
  const { styles: st, cx } = useStyles();
  return (
    <AntdCollapse
      {...rest}
      expandIcon={({ isActive }) => <DownArrowIcon className={cx(isActive && st.collapseIcon)} />}
      expandIconPosition={'end'}
      className={cx(st.aelfdCollapse, className)}
    />
  );
}

Collapse.Panel = AntdCollapse.Panel;
export default Collapse;
