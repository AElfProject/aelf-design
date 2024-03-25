import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/wallet.svg';
import { IconProps } from '../../type';

const componentName = 'WalletOutlined';
export const WalletOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
WalletOutlined.displayName = componentName;
