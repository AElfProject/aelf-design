import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/eye.svg';

const componentName = 'EyeTwoToneIcon';
export const EyeTwoToneIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
  (props, ref) => {
    return (
      <AelfIcon
        component={AelfSVGComponent}
        componentName={componentName}
        defaultWidth={18}
        defaultHeight={14}
        ref={ref}
        {...props}
      />
    );
  },
);
EyeTwoToneIcon.displayName = 'EyeTwoToneIcon';
