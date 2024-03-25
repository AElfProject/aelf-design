import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/minus-circle.svg';
import { IconProps } from '../../type';

const componentName = 'MinusCircleOutlined';
export const MinusCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
MinusCircleOutlined.displayName = componentName;
