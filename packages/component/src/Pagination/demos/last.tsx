import React from 'react';
import { Pagination } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Pagination
        total={100}
        showLast={false}
        onChange={(page, pagesize) => {
          console.log(page, pagesize);
        }}
      ></Pagination>
      <Pagination
        total={100}
        showFirst={false}
        showLast={false}
        showSizeChange={false}
      ></Pagination>
    </Space>
  );
}

export default Demo;
