import React, { useState } from 'react';
import { SliderBindInput } from 'aelf-design';
import type { SliderSingleProps } from 'aelf-design';
import { Space } from 'antd';

const marks: SliderSingleProps['marks'] = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};
const App: React.FC = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <SliderBindInput />
      <SliderBindInput sliderProps={{ marks }} />
    </Space>
  );
};

export default App;
