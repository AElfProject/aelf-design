import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/close-circle.svg';
import { IconProps } from '../../type';

const componentName = 'CloseCircleOutlined';
export const CloseCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
CloseCircleOutlined.displayName = componentName;
