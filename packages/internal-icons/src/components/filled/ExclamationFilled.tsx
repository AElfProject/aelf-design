import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/exclamation.svg';
import { IconProps } from '../../type';

const componentName = 'ExclamationFilled';
export const ExclamationFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ExclamationFilled.displayName = componentName;
