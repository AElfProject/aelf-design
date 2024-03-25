import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/share-external.svg';
import { IconProps } from '../../type';

const componentName = 'ShareExternalOutlined';
export const ShareExternalOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ShareExternalOutlined.displayName = componentName;
