import React from 'react';
import { AddCircleOutlined, DownOutlined } from '@aelf-design/internal-icons';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space>
    <DownOutlined color="#1370DD" hoverColor="#3689DD" activeColor="#0756BC" />
    <AddCircleOutlined color="red" hoverColor="blue" activeColor="yellow" />
  </Space>
);

export default App;
