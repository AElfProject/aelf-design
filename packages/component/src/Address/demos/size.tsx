import React from 'react';
import { HashAddress } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <div>
        small:
        <HashAddress address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G" size="small" />
      </div>
      <div>
        default:
        <HashAddress
          address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
          preLen={8}
          endLen={8}
          ignorePrefixSuffix
          size="default"
        />
      </div>
      <div>
        large:
        <HashAddress
          address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
          hasCopy={false}
          size="large"
        />
      </div>
      <div>
        ultra:
        <HashAddress
          address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
          hasCopy={false}
          size="ultra"
        />
      </div>
    </Space>
  );
};

export default App;
