import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/minus.svg';
import { IconProps } from '../../type';

const componentName = 'MinusOutlined';
export const MinusOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
MinusOutlined.displayName = componentName;
