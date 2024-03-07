import React from 'react';
import { Dropdown, Typography } from 'aelf-design';
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
const App: React.FC = () => {
  return (
    <div>
      <Space size={100}>
        <Dropdown size="small" menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}>
          <Typography.Text>small (hover me)</Typography.Text>
        </Dropdown>
        <Dropdown size="medium" menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}>
          <Typography.Text>medium</Typography.Text>
        </Dropdown>
        <Dropdown size="default" menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}>
          <Typography.Text>default</Typography.Text>
        </Dropdown>
        <Dropdown size="large" menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}>
          <Typography.Text>large</Typography.Text>
        </Dropdown>
      </Space>
    </div>
  );
};

export default App;
