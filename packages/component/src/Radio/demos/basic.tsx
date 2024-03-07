import React, { useState } from 'react';
import { AELFDProvider, Radio } from 'aelf-design';
import { RadioChangeEvent, Space } from 'antd';

export default function RadioExample() {
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Space direction="vertical">
      <div>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
      </div>
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
      <div>
        <AELFDProvider
          customToken={{
            customRadio: {
              dotColor: 'pink',
            },
          }}
        >
          <Radio.Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </AELFDProvider>
      </div>
    </Space>
  );
}
