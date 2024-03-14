import React from 'react';
import { Button } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <div>
      <Space>
        <Button size="mini">mini</Button>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button>default</Button>
        <Button size="large">large</Button>
        <Button size="ultra">ultra</Button>
      </Space>
    </div>
  );
};

export default App;
