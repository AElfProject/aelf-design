import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/edit.svg';
import { IconProps } from '../../type';

const componentName = 'EditOutlined';
export const EditOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
EditOutlined.displayName = componentName;
