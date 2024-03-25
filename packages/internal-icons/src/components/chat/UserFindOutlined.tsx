import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/user-find.svg';
import { IconProps } from '../../type';

const componentName = 'UserFindOutlined';
export const UserFindOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
UserFindOutlined.displayName = componentName;
