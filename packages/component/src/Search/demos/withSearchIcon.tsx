import React from 'react';
import { Search } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Search
        withSearchIcon="inline"
        onSearchBtnClick={(e) => {
          console.log(e);
        }}
        placeholder="search something..."
      />
      <Search
        withSearchIcon="connect"
        onSearchBtnClick={(e) => {
          console.log(e);
        }}
        placeholder="search something..."
      />
      <Search
        withSearchIcon="after"
        onSearchBtnClick={(e) => {
          console.log(e);
        }}
        placeholder="search something..."
      />
    </Space>
  );
}

export default Demo;
