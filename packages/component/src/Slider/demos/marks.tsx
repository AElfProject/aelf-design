import React from 'react';
import { Slider } from 'aelf-design';
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

const App: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <div>
      <h4>included=true</h4>
      <Slider marks={marks} defaultValue={37} />
      <Slider
        range={{
          draggableTrack: true,
        }}
        marks={marks}
        defaultValue={[26, 37]}
      />
    </div>

    <div>
      <h4>included=false</h4>
      <Slider marks={marks} included={false} defaultValue={37} />
    </div>

    <div>
      <h4>marks & step</h4>
      <Slider marks={marks} step={10} defaultValue={37} />
    </div>

    <div>
      <h4>step=null</h4>
      <Slider marks={marks} step={null} defaultValue={37} />
    </div>
  </Space>
);

export default App;
