import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/user-profile.svg';
import { IconProps } from '../../type';

const componentName = 'UserProfileOutlined';
export const UserProfileOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
UserProfileOutlined.displayName = componentName;
