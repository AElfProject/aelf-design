import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/question.svg';
import { IconProps } from '../../type';

const componentName = 'QuestionFilled';
export const QuestionFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
QuestionFilled.displayName = componentName;
