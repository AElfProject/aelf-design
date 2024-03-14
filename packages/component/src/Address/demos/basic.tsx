import React from 'react';
import { HashAddress } from 'aelf-design';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <HashAddress address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G" />
      <HashAddress address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G" chain="tDVV" />
      <HashAddress address="2DKgy7GafbrYWGnhSC3iSYgM9ZfudYS2KLLr1rDPLF9nZfWA6G" chain="tDVW" />
    </Space>
  );
};

export default App;
