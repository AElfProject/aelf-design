import React from 'react';
import { Breadcrumb } from 'aelf-design';

const App: React.FC = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: 'Location',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'Application Center',
      },
      {
        type: 'separator',
        separator: '/',
      },
      {
        href: '',
        title: 'Application List',
      },
      {
        type: 'separator',
        separator: '|',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);

export default App;
