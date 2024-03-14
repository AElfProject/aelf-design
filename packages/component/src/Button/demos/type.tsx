import React from 'react';
import { QueryIcon } from '@aelf-design/internal-icons';
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
          <Button shape="circle" icon={<QueryIcon />} />
          <Button shape="circle" type="primary" icon={<QueryIcon />} />
          <Button shape="circle" type="dashed" icon={<QueryIcon />} />
          <Button shape="circle" type="primary" ghost icon={<QueryIcon />} />
          <Button shape="circle" danger icon={<QueryIcon />} />
        </Space>
        <Space>
          <Button icon={<QueryIcon />} />
          <Button type="primary" icon={<QueryIcon />} />
          <Button type="dashed" icon={<QueryIcon />} />
          <Button type="primary" ghost icon={<QueryIcon />} />
          <Button danger icon={<QueryIcon />} />
        </Space>
        <Space>
          <Button icon={<QueryIcon />}>button</Button>
          <Button type="primary" icon={<QueryIcon />}>
            button
          </Button>
          <Button type="dashed" icon={<QueryIcon />}>
            button
          </Button>
          <Button type="primary" ghost icon={<QueryIcon />}>
            button
          </Button>
          <Button danger icon={<QueryIcon />}>
            button
          </Button>
        </Space>
      </Space>
    </div>
  );
};

export default App;
