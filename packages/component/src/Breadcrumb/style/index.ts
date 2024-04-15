import { createStyles } from 'antd-style';

import type { IBreadcrumbProps } from '../type';

const useStyles = createStyles(({ token, css, prefixCls }, { size }: IBreadcrumbProps) => {
  const isSmall = size === 'small';
  return {
    breadcrumbWrap: css`
      font-size: ${isSmall ? 12 : 14}px;
      line-height: ${isSmall ? 20 : 22}px;
      .${prefixCls}-breadcrumb-separator {
        font-size: 12px;
      }
    `,
  };
});

export default useStyles;
