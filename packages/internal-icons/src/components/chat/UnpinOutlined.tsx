import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/unpin.svg';
import { IconProps } from '../../type';

const componentName = 'UnpinOutlined';
export const UnpinOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
UnpinOutlined.displayName = componentName;
