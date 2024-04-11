import React from 'react';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  TimeCircleOutlined,
} from '@aelf-design/icons';
import { Tag } from 'aelf-design';
import { Divider, Flex } from 'antd';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Without icon</Divider>
    <Flex gap="4px 0" wrap="wrap">
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </Flex>
    <Divider orientation="left">With icon</Divider>
    <Flex gap="4px 0" wrap="wrap">
      <Tag icon={<CheckCircleOutlined />} color="success">
        success
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
      <Tag icon={<TimeCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag>
    </Flex>
  </>
);

export default App;
