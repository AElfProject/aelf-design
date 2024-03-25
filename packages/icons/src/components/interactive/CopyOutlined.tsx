import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/copy.svg';
import { IconProps } from '../../type';

const componentName = 'CopyOutlined';
export const CopyOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CopyOutlined.displayName = componentName;
