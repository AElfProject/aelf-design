import React from 'react';
import { HashAddress } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <HashAddress
        address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G"
        primaryLinkColor="red"
        primaryIconColor="yellow"
        addressHoverColor="orange"
        addressActiveColor="blue"
      />
    </Space>
  );
};

export default App;
