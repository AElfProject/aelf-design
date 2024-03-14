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
          <Typography.Title level={7}>small (hover me)</Typography.Title>
        </Dropdown>
        <Dropdown size="medium" menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}>
          <Typography.Title level={7}>medium</Typography.Title>
        </Dropdown>
        <Dropdown size="default" menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}>
          <Typography.Title level={7}>default</Typography.Title>
        </Dropdown>
        <Dropdown size="large" menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}>
          <Typography.Title level={7}>large</Typography.Title>
        </Dropdown>
      </Space>
    </div>
  );
};

export default App;
