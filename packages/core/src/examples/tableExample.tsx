import { ColumnsType } from 'antd/es/table'
import AelfdTable from '../components/Table'
import { useEffect, useState } from 'react'
import { IEpPaginationProps } from 'components/Pagination'
interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const data: DataType[] = []
for (let i = 0; i < 103; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

interface TableParams {
  pagination: IEpPaginationProps
}

export default function TableExample() {
  const [dataSource, setDataSource] = useState<DataType[]>()
  const [loading, setLoading] = useState(false)

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 103
    }
  })
  const fetchData = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const { current: page = 1, pageSize = 10 } = tableParams.pagination
    const result = data.slice((page - 1) * pageSize, page * pageSize)
    setDataSource(result)
    setLoading(false)
  }

  const pageChange = (page: number) => {
    setTableParams({
      pagination: {
        ...tableParams.pagination,
        current: page
      }
    })
  }

  const pageSizeChange = (page: number, pageSize: number) => {
    setTableParams({
      pagination: {
        ...tableParams.pagination,
        current: page,
        pageSize: pageSize
      }
    })
  }

  useEffect(() => {
    fetchData()
  }, [tableParams])

  return (
    <AelfdTable
      columns={columns}
      loading={loading}
      pagination={{ ...tableParams.pagination, pageChange, pageSizeChange }}
      dataSource={dataSource}
    ></AelfdTable>
  )
}
