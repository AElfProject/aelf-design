import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/question-circle.svg';
import { IconProps } from '../../type';

const componentName = 'QuestionCircleOutlined';
export const QuestionCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
QuestionCircleOutlined.displayName = componentName;
