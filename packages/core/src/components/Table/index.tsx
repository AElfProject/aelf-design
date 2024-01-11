import { Table as AntdTable, TableProps } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import Pagination, { IPaginationProps } from 'components/Pagination'
import useStyles from './style'
export interface ITableProps<T> extends Omit<TableProps<T>, 'pagination'> {
  pagination?: IPaginationProps
}

function Table<T extends AnyObject>({ pagination, ...params }: ITableProps<T>) {
  const { styles, cx, prefixCls } = useStyles()
  return (
    <div className={cx(prefixCls + '-table-container', styles.TableContainer)}>
      <AntdTable<T> {...params} pagination={false} />
      {pagination && (
        <div className={cx(styles.tablePaginationContainer)}>
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  )
}

export default Table
