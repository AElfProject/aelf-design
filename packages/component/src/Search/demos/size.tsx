import React from 'react';
import { Search } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Search inputSize="small" placeholder="search something..." />
      <Search inputSize="middle" placeholder="search something..." />
    </Space>
  );
}

export default Demo;
