import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/share-internal.svg';
import { IconProps } from '../../type';

const componentName = 'ShareInternalOutlined';
export const ShareInternalOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ShareInternalOutlined.displayName = componentName;
