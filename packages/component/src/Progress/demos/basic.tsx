import React, { useState } from 'react';
import { Progress } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Progress percent={10} size={[300, 8]} strokeColor="#00ff00" showInfo={true} />
      <Progress percent={50} size={[300, 12]} showInfo={true} />
      <Progress percent={100} size={[300, 20]} />
    </Space>
  );
}

export default Demo;
