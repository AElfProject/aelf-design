import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/transfer.svg';
import { IconProps } from '../../type';

const componentName = 'TransferOutlined';
export const TransferOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
TransferOutlined.displayName = componentName;
