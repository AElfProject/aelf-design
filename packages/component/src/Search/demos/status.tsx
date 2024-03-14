import React from 'react';
import { Search } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Search
        withSearchIcon="connect"
        onSearchBtnClick={(e) => {
          console.log(e);
        }}
        status="error"
        placeholder="search something..."
      />
      <Search
        withSearchIcon="connect"
        onSearchBtnClick={(e) => {
          console.log(e);
        }}
        status="warning"
        placeholder="search something..."
      />
    </Space>
  );
}

export default Demo;
