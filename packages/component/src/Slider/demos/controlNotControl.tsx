import React, { useState } from 'react';
import { SliderBindInput } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  const [v, setV] = useState(40);
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <div>
        not control
        <SliderBindInput />
      </div>

      <div>
        control
        <SliderBindInput
          value={v}
          onChange={(v) => {
            setV(v);
          }}
        />
      </div>
    </Space>
  );
};

export default App;
