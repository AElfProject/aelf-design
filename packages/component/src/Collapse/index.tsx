import React, { forwardRef } from 'react';
import { DownOutlined } from '@aelf-design/icons';
import { Collapse as AntdCollapse, CollapseProps } from 'antd';

import useStyles from './style';

export interface ICollapseProps extends Omit<CollapseProps, 'expandIcon' | 'expandIconPosition'> {
  className?: string;
}

const InternalCollapse = forwardRef<HTMLDivElement, ICollapseProps>(
  ({ className, ...rest }: ICollapseProps, ref) => {
    const { styles: st, cx } = useStyles();
    return (
      <AntdCollapse
        {...rest}
        expandIcon={({ isActive }) => <DownOutlined className={cx(isActive && st.collapseIcon)} />}
        expandIconPosition={'end'}
        className={cx(st.aelfdCollapse, className)}
        ref={ref}
      />
    );
  },
);

if (process.env.NODE_ENV !== 'production') {
  InternalCollapse.displayName = 'Collapse';
}

type ComputedCollapse = typeof InternalCollapse & {
  Panel: typeof AntdCollapse.Panel;
};

const Collapse = InternalCollapse as ComputedCollapse;

Collapse.Panel = AntdCollapse.Panel;

export default Collapse;
