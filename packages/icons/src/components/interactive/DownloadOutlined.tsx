import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/download.svg';
import { IconProps } from '../../type';

const componentName = 'DownloadOutlined';
export const DownloadOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
DownloadOutlined.displayName = componentName;
