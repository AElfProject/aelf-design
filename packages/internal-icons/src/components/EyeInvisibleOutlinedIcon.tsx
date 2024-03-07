import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/eye-invisible.svg';

const componentName = 'EyeInvisibleOutlinedIcon';
export const EyeInvisibleOutlinedIcon = React.forwardRef<
  HTMLSpanElement,
  IconBaseProps & IconColorProps
>((props, ref) => {
  return (
    <AelfIcon
      component={AelfSVGComponent}
      componentName={componentName}
      defaultWidth={18}
      defaultHeight={18}
      ref={ref}
      {...props}
    />
  );
});
EyeInvisibleOutlinedIcon.displayName = componentName;
