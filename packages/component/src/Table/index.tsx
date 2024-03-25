import React, { forwardRef, useRef } from 'react';
import { Table as AntdTable, TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { TableRef } from 'antd/es/table';

import Pagination, { IPaginationProps } from '../Pagination';
import useStyles from './style';

export interface ITableProps<T> extends Omit<TableProps<T>, 'pagination'> {
  pagination?: IPaginationProps;
}

const Table = <T extends AnyObject>(
  { pagination, ...params }: ITableProps<T>,
  ref: React.Ref<TableRef>,
) => {
  const { styles, cx, prefixCls } = useStyles();
  return (
    <div className={cx(prefixCls + '-table-container', styles.TableContainer)}>
      <AntdTable<T> {...params} pagination={false} ref={ref} />
      {pagination && (
        <div className={cx(styles.tablePaginationContainer)}>
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  );
};

export default forwardRef(Table);
