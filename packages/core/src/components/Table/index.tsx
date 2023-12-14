import { Table, TableProps } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import AelfdPagination, { IEpPaginationProps } from 'components/Pagination'
import useStyles from './style'
export interface IAeldTableProps<T> extends Omit<TableProps<T>, 'pagination'> {
  pagination?: IEpPaginationProps
}

function AelfdTable<T extends AnyObject>({
  pagination,
  ...params
}: IAeldTableProps<T>) {
  const { styles, cx } = useStyles()
  return (
    <div className={cx('aelfd-table-container', styles.aelfdTableContainer)}>
      <Table<T> {...params} pagination={false} />
      {pagination && (
        <div className={cx(styles.tablePaginationContainer)}>
          <AelfdPagination {...pagination} />
        </div>
      )}
    </div>
  )
}

export default AelfdTable
