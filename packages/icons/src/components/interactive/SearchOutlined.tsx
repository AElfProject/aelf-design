import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/search.svg';
import { IconProps } from '../../type';

const componentName = 'SearchOutlined';
export const SearchOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
SearchOutlined.displayName = componentName;
