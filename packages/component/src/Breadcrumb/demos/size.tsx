import React from 'react';
import { Breadcrumb } from 'aelf-design';
import { Divider, Space } from 'antd';

const items = [
  {
    title: 'Home',
  },
  {
    title: <a href="">Application Center</a>,
  },
  {
    title: <a href="">Application List</a>,
  },
  {
    title: 'An Application',
  },
];
const App: React.FC = () => {
  return (
    <>
      <Breadcrumb separatorMode="slash" items={items} />
      <Breadcrumb separatorMode="slash" items={items} size="small" />
      <Divider></Divider>
      <Breadcrumb separatorMode="arrow" items={items} />
      <Breadcrumb separatorMode="arrow" items={items} size="small" />
    </>
  );
};

export default App;
