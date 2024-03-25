import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/artboard.svg';
import { IconProps } from '../../type';

const componentName = 'ArtboardOutlined';
export const ArtboardOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ArtboardOutlined.displayName = componentName;
