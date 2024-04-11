import React from 'react';
import { CloseCircleOutlined } from '@aelf-design/icons';
import { Tag } from 'aelf-design';

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

const App: React.FC = () => (
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <Tag closeIcon onClose={preventDefault}>
      Prevent Default
    </Tag>
    <Tag closeIcon={<CloseCircleOutlined color="#fff" />} onClose={console.log}>
      Tag 2
    </Tag>
  </>
);

export default App;
