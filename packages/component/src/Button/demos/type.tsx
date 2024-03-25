import React from 'react';
import { SearchOutlined } from '@aelf-design/icons';
import { Button } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <div>
      <Space direction="vertical">
        <Space>
          <Button type="primary">button</Button>
          <Button>button</Button>
          <Button type="dashed">button</Button>
          <Button type="primary" ghost>
            button
          </Button>
        </Space>
        <Space>
          <Button type="primary" danger>
            button
          </Button>
          <Button type="primary" disabled>
            button
          </Button>
          <Button type="text">button</Button>
          <Button type="link">link</Button>
          <Button type="primary" loading>
            button
          </Button>
        </Space>
        <Space>
          <Button shape="circle" icon={<SearchOutlined />} />
          <Button shape="circle" type="primary" icon={<SearchOutlined />} />
          <Button shape="circle" type="dashed" icon={<SearchOutlined />} />
          <Button shape="circle" type="primary" ghost icon={<SearchOutlined />} />
          <Button shape="circle" danger icon={<SearchOutlined />} />
        </Space>
        <Space>
          <Button icon={<SearchOutlined />} />
          <Button type="primary" icon={<SearchOutlined />} />
          <Button type="dashed" icon={<SearchOutlined />} />
          <Button type="primary" ghost icon={<SearchOutlined />} />
          <Button danger icon={<SearchOutlined />} />
        </Space>
        <Space>
          <Button icon={<SearchOutlined />}>button</Button>
          <Button type="primary" icon={<SearchOutlined />}>
            button
          </Button>
          <Button type="dashed" icon={<SearchOutlined />}>
            button
          </Button>
          <Button type="primary" ghost icon={<SearchOutlined />}>
            button
          </Button>
          <Button danger icon={<SearchOutlined />}>
            button
          </Button>
        </Space>
      </Space>
    </div>
  );
};

export default App;
