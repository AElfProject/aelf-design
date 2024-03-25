import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/add-circle.svg';
import { IconProps } from '../../type';

const componentName = 'AddCircleOutlined';
export const AddCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
AddCircleOutlined.displayName = componentName;
