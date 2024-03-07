import React from 'react';
import { DownArrowIcon } from '@aelf-design/internal-icons';
import { AndroidOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'aelf-design';
import { Space } from 'antd';

const tabItems = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
    icon: <SearchOutlined />,
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
    icon: <DownArrowIcon />,
  },
  {
    key: '3',
    label: 'Tabxxxxxx 3',
    children: 'Content of Tab Pane 3',
    icon: <SearchOutlined />,
  },
];
const App: React.FC = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Tabs defaultActiveKey="1" items={tabItems} />
      <Tabs
        size="small"
        defaultActiveKey="1"
        items={tabItems}
        indicatorSize={(origin) => origin - 26}
      />
    </Space>
  );
};

export default App;
