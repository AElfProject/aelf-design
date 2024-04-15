import { BreadcrumbProps } from 'antd';

export interface IBreadcrumbProps extends BreadcrumbProps {
  separatorMode?: 'slash' | 'arrow';
  size?: 'small';
}
