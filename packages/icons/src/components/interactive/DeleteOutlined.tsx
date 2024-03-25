import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/delete.svg';
import { IconProps } from '../../type';

const componentName = 'DeleteOutlined';
export const DeleteOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
DeleteOutlined.displayName = componentName;
