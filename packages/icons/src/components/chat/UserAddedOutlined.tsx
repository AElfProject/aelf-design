import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/user-added.svg';
import { IconProps } from '../../type';

const componentName = 'UserAddedOutlined';
export const UserAddedOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
UserAddedOutlined.displayName = componentName;
