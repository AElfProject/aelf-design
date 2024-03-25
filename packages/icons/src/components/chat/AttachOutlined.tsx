import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/attach.svg';
import { IconProps } from '../../type';

const componentName = 'AttachOutlined';
export const AttachOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
AttachOutlined.displayName = componentName;
