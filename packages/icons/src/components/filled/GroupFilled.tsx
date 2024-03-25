import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/group.svg';
import { IconProps } from '../../type';

const componentName = 'GroupFilled';
export const GroupFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
GroupFilled.displayName = componentName;
