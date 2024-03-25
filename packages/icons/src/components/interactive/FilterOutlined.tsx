import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/filter.svg';
import { IconProps } from '../../type';

const componentName = 'FilterOutlined';
export const FilterOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
FilterOutlined.displayName = componentName;
