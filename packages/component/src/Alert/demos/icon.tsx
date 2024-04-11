import React from 'react';
import { Alert } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Success Text" type="success" showIcon />
        <Alert message="Info Text" type="info" showIcon />
        <Alert message="Warning Text" type="warning" showIcon />
        <Alert message="Error Text" type="error" showIcon />
      </Space>
    </div>
  );
};

export default App;
