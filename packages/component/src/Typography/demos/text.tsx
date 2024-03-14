import React from 'react';
import { FontWeightEnum, Typography } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Typography.Text size="mini" fontWeight={FontWeightEnum.Regular}>
        text mini Regular
      </Typography.Text>
      <Typography.Text size="mini" fontWeight={FontWeightEnum.Medium}>
        text mini Medium
      </Typography.Text>
      <Typography.Text size="mini" fontWeight={FontWeightEnum.Bold}>
        text mini Bold
      </Typography.Text>

      <Typography.Text size="small" fontWeight={FontWeightEnum.Regular}>
        text small Regular
      </Typography.Text>
      <Typography.Text size="small" fontWeight={FontWeightEnum.Medium}>
        text small Medium
      </Typography.Text>
      <Typography.Text size="small" fontWeight={FontWeightEnum.Bold}>
        text small Bold
      </Typography.Text>

      <Typography.Text size="normal" fontWeight={FontWeightEnum.Regular}>
        text normal Regular
      </Typography.Text>
      <Typography.Text size="normal" fontWeight={FontWeightEnum.Medium}>
        text normal Medium
      </Typography.Text>
      <Typography.Text size="normal" fontWeight={FontWeightEnum.Bold}>
        text normal Bold
      </Typography.Text>
    </Space>
  );
}

export default Demo;
