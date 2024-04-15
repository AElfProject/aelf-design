import React, { useState } from 'react';
import { Slider } from 'aelf-design';
import { Space, Switch } from 'antd';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
    </Space>
  );
};

export default App;
