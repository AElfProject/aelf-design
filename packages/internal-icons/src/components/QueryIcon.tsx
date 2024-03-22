import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/query.svg';
import { type IconProps } from '../type';

const componentName = 'QueryIcon';
export const QueryIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon
      component={AelfSVGComponent}
      componentName={componentName}
      style={{
        fontSize: '18px',
      }}
      ref={ref}
      {...props}
    />
  );
});
QueryIcon.displayName = 'QueryIcon';
