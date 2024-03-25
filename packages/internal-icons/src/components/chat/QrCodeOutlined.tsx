import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/qr-code.svg';
import { IconProps } from '../../type';

const componentName = 'QrCodeOutlined';
export const QrCodeOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
QrCodeOutlined.displayName = componentName;
