import React from 'react';
import { CheckOutlined, CloseOutlined } from '@aelf-design/icons';
import { Switch } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical">
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined style={{ fontSize: '18px' }} />}
      unCheckedChildren={<CloseOutlined style={{ fontSize: '18px' }} />}
      defaultChecked
    />
  </Space>
);

export default App;
