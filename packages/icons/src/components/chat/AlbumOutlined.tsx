import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/album.svg';
import { IconProps } from '../../type';

const componentName = 'AlbumOutlined';
export const AlbumOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
AlbumOutlined.displayName = componentName;
