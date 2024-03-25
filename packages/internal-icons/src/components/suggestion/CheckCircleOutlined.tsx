import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/check-circle.svg';
import { IconProps } from '../../type';

const componentName = 'CheckCircleOutlined';
export const CheckCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
CheckCircleOutlined.displayName = componentName;
