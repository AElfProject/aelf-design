import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';

import { IPaginationProps } from '../../Pagination';
import Table from '../index';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [];
for (let i = 0; i < 103; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

interface TableParams {
  pagination: IPaginationProps;
}

export default function TableExample() {
  const [dataSource, setDataSource] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 103,
    },
  });
  const fetchData = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { current: page = 1, pageSize = 10 } = tableParams.pagination;
    const result = data.slice((page - 1) * pageSize, page * pageSize);
    setDataSource(result);
    setLoading(false);
  };

  const onChange = (page: number, pageSize: number) => {
    setTableParams({
      pagination: {
        ...tableParams.pagination,
        current: page,
        pageSize: pageSize,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, [tableParams]);

  return (
    <div>
      <Table
        columns={columns}
        loading={loading}
        pagination={{ ...tableParams.pagination, onChange, showLast: false }}
        dataSource={dataSource}
      />
    </div>
  );
}
