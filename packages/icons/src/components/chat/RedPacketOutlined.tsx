import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/red-packet.svg';
import { IconProps } from '../../type';

const componentName = 'RedPacketOutlined';
export const RedPacketOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
RedPacketOutlined.displayName = componentName;
