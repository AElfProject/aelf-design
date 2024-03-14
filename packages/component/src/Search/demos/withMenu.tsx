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
        filterItems={items}
        inputSize="middle"
        placeholder="search something..."
        prefixWidth={130}
        onClear={() => {
          console.log(1);
        }}
        onSelectChange={(obj) => {
          console.log(obj);
        }}
        onPressEnter={(e) => {
          console.log('enter', e);
        }}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        onSearchBtnClick={(e) => {
          console.log(e);
        }}
        withSearchIcon="connect"
      />
    </Space>
  );
}

export default Demo;
