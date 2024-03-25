import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/user-add.svg';
import { IconProps } from '../../type';

const componentName = 'UserAddOutlined';
export const UserAddOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
UserAddOutlined.displayName = componentName;
