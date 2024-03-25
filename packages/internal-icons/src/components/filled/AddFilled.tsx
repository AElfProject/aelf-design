import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/add.svg';
import { IconProps } from '../../type';

const componentName = 'AddFilled';
export const AddFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
AddFilled.displayName = componentName;
