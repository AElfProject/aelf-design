import React, { ReactNode, useMemo } from 'react';
import { RightOutlined } from '@aelf-design/icons';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import classNames from 'classnames';

import useStyles from './style';
import type { IBreadcrumbProps } from './type';

interface ISeparatorProps {
  separator?: ReactNode;
}

type TBreadcrumb = typeof AntdBreadcrumb;

const Breadcrumb: TBreadcrumb = (props: IBreadcrumbProps) => {
  const { separatorMode, className, size, ...resetProps } = props;
  const { styles } = useStyles(props);
  const cls = classNames(className, styles.breadcrumbWrap);
  const separatorProps: ISeparatorProps = useMemo(() => {
    if (separatorMode === 'arrow') {
      return {
        separator: <RightOutlined />,
      };
    }
    return {};
  }, [separatorMode]);
  return <AntdBreadcrumb {...separatorProps} {...resetProps} className={cls} />;
};

Breadcrumb.Item = AntdBreadcrumb.Item;
Breadcrumb.Separator = AntdBreadcrumb.Separator;

Breadcrumb.displayName = 'AelfBreadcrumb';

export default Breadcrumb;

export type { IBreadcrumbProps };
