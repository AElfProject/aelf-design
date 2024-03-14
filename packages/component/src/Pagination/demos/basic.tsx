import React from 'react';
import { Pagination } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Pagination total={100}></Pagination>
      <Pagination total={100} showSizeChanger={false}></Pagination>
    </Space>
  );
}

export default Demo;
