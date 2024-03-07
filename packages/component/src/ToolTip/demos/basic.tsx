import React from 'react';
import { Button, ToolTip } from 'aelf-design';
import { Space } from 'antd';

const text = (
  <span>
    Content Text Content TextContent Text Content TextContent Text Content TextContent Text Content
    Text
  </span>
);

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <ToolTip placement="topLeft" open={true} title={text}>
        <Button>TL</Button>
      </ToolTip>
      <ToolTip placement="top" title={text}>
        <Button>Top</Button>
      </ToolTip>
      <ToolTip placement="topRight" title={text}>
        <Button>TR</Button>
      </ToolTip>
    </Space>
  );
}

export default Demo;
