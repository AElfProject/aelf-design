import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/info-circle.svg';
import { IconProps } from '../../type';

const componentName = 'InfoCircleOutlined';
export const InfoCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
InfoCircleOutlined.displayName = componentName;
