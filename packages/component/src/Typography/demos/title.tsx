import React from 'react';
import { FontWeightEnum, Typography } from 'aelf-design';
import { Space } from 'antd';

function Demo() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Typography.Title fontWeight={FontWeightEnum.Regular} level={1}>
        level1 Regular
      </Typography.Title>
      <Typography.Title fontWeight={FontWeightEnum.Medium} level={2}>
        level2 Medium
      </Typography.Title>
      <Typography.Title fontWeight={FontWeightEnum.Bold} level={2}>
        level2 Bold
      </Typography.Title>
      <Typography.Title fontWeight={FontWeightEnum.Bold} level={3}>
        level3 Bold
      </Typography.Title>
      <Typography.Title fontWeight={FontWeightEnum.Bold} level={4}>
        level4 Bold
      </Typography.Title>
      <Typography.Title fontWeight={FontWeightEnum.Bold} level={5}>
        level5 Bold
      </Typography.Title>

      <Typography.Title fontWeight={FontWeightEnum.Bold} level={6}>
        level6 Bold
      </Typography.Title>

      <Typography.Title fontWeight={FontWeightEnum.Bold} level={7}>
        level7 Bold
      </Typography.Title>
    </Space>
  );
}

export default Demo;
