import React from 'react';
import { Breadcrumb } from 'aelf-design';

const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
const items = [
  {
    title: 'Ant Design',
  },
  {
    title: <a href="">Component</a>,
  },
  {
    title: <a href="">General</a>,
    menu: { items: menuItems },
  },
  {
    title: 'Button',
  },
];
const App: React.FC = () => (
  <div>
    <Breadcrumb items={items} />
    <Breadcrumb separatorMode="arrow" items={items} />
  </div>
);

export default App;
