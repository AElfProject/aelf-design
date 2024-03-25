import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/group.svg';
import { IconProps } from '../../type';

const componentName = 'GroupOutlined';
export const GroupOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
GroupOutlined.displayName = componentName;
