import React from 'react';
import { DownArrowIcon } from '@aelf-design/internal-icons';
import { Tabs } from 'aelf-design';
import { Space } from 'antd';

const tabItems = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
    icon: <DownArrowIcon />,
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
    icon: <DownArrowIcon />,
  },
];
const App: React.FC = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Tabs defaultActiveKey="1" items={tabItems} />
      <Tabs
        size="small"
        defaultActiveKey="3"
        items={tabItems}
        indicator={{ size: (origin) => origin - 20 }}
      />
    </Space>
  );
};

export default App;
