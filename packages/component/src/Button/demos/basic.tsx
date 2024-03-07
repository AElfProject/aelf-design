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
        <Button
          onClick={() => {
            console.log(3);
          }}
        >
          default
        </Button>
        <Button
          size="large"
          onClick={() => {
            console.log(1);
          }}
        >
          large
        </Button>
        <Button
          size="ultra"
          onClick={() => {
            console.log(1);
          }}
        >
          ultra
        </Button>
      </Space>
    </div>
  );
};

export default App;
