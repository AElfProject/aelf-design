import React, { useState } from 'react';
import { Slider } from 'aelf-design';
import { Space, Switch } from 'antd';

const App: React.FC = () => {
  const [error, seterror] = useState(false);

  const onChange = (checked: boolean) => {
    seterror(checked);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Slider defaultValue={30} status={error ? 'error' : ''} />
      <Slider range defaultValue={[20, 50]} status={error ? 'error' : ''} />
      error: <Switch size="small" checked={error} onChange={onChange} />
    </Space>
  );
};

export default App;
