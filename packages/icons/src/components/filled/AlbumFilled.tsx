import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/album.svg';
import { IconProps } from '../../type';

const componentName = 'AlbumFilled';
export const AlbumFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
AlbumFilled.displayName = componentName;
