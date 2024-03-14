import React from 'react';
import { HashAddress, Typography } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <div>
        <Typography.Title level={7}>small:</Typography.Title>
        <HashAddress
          address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
          preLen={8}
          endLen={8}
          size="small"
        />
      </div>
      <div>
        <Typography.Title level={7}>default:</Typography.Title>
        <HashAddress
          address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
          preLen={8}
          endLen={8}
          size="default"
        />
      </div>
      <div>
        <Typography.Title level={7}>large:</Typography.Title>
        <HashAddress
          address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
          preLen={8}
          endLen={8}
          size="large"
        />
      </div>
      <div>
        <Typography.Title level={7}>ultra:</Typography.Title>
        <HashAddress
          address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
          preLen={8}
          endLen={8}
          size="ultra"
        />
      </div>
    </Space>
  );
};

export default App;
