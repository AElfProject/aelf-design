import React from 'react';
import { Search } from 'aelf-design';
import { Space } from 'antd';

const items = [
  {
    key: '1',
    label: <div className="w-[130px]">1st menu item</div>,
    value: '1st menu item',
  },
  {
    key: '2',
    label: <div className="w-[130px]">2nd menu item</div>,
    value: '2nd menu item',
  },
  {
    key: '3',
    label: <div className="w-[130px]">3rd menu item</div>,
    value: '3rd menu item',
  },
];

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
