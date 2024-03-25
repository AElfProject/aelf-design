import React from 'react';
import { Space } from 'antd';

// import { AndroidOutlined } from '@ant-design/icons';
import Input from '../index';

const App: React.FC = () => {
  return (
    <div>
      <Space direction="vertical">
        <Input
          placeholder="input something"
          onClear={(e) => {
            console.log(e);
          }}
          size="small"
        />
        <Input placeholder="input something" size="middle" />
      </Space>
    </div>
  );
};

export default App;
