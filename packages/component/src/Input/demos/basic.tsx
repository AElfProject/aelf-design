import React from 'react';
import { AndroidOutlined } from '@ant-design/icons';
import { Input } from 'aelf-design';

const App: React.FC = () => {
  return (
    <div>
      <Input
        placeholder="default"
        prefix={<AndroidOutlined />}
        onClear={(e) => {
          console.log(e);
        }}
        size="small"
      />
      <Input placeholder="middle" prefix={<AndroidOutlined />} size="middle" />
    </div>
  );
};

export default App;
