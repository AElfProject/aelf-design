import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/exclamation-circle.svg';
import { IconProps } from '../../type';

const componentName = 'ExclamationCircleOutlined';
export const ExclamationCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
  },
);
ExclamationCircleOutlined.displayName = componentName;
