import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/calendar.svg';
import { IconProps } from '../../type';

const componentName = 'CalendarOutlined';
export const CalendarOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CalendarOutlined.displayName = componentName;
