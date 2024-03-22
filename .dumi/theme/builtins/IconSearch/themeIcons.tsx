import * as React from 'react';
import type { CustomIconComponentProps } from '@ant-design/icons/es/components/Icon';

type CustomIconComponent = React.ComponentType<
  CustomIconComponentProps | React.SVGProps<SVGSVGElement>
>;

export const FilledIcon: CustomIconComponent = (props) => {
  const path =
    'M864 64H160C107 64 64 107 64 160v' +
    '704c0 53 43 96 96 96h704c53 0 96-43 96-96V16' +
    '0c0-53-43-96-96-96z';
  return (
    <svg {...props} viewBox="0 0 1024 1024">
      <path d={path} />
    </svg>
  );
};

export const OutlinedIcon: CustomIconComponent = (props) => {
  const path =
    'M864 64H160C107 64 64 107 64 160v7' +
    '04c0 53 43 96 96 96h704c53 0 96-43 96-96V160c' +
    '0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-' +
    '12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4' +
    ' 12 12v680c0 6.6-5.4 12-12 12z';
  return (
    <svg {...props} viewBox="0 0 1024 1024">
      <path d={path} />
    </svg>
  );
};
