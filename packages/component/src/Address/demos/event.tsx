import React from 'react';
import { HashAddress } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <HashAddress
        address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
        preLen={8}
        endLen={8}
        addressClickCallback={(originAdd, finalAdd, event) => {
          console.log(originAdd, finalAdd, event);
        }}
        ignoreEvent={true}
        ignorePrefixSuffix
      />
    </Space>
  );
};

export default App;
