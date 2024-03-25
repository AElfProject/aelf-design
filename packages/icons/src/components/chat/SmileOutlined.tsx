import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/smile.svg';
import { IconProps } from '../../type';

const componentName = 'SmileOutlined';
export const SmileOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
SmileOutlined.displayName = componentName;
