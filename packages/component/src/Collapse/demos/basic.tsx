import React from 'react';
import { Collapse, ICollapseProps } from 'aelf-design';
import { Space } from 'antd';

const collapsetText = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
const collapseItems: ICollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <div>{collapsetText}</div>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <div>{collapsetText}</div>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <div>{collapsetText}</div>,
  },
];
const App: React.FC = () => {
  return (
    <div>
      <Collapse style={{ with: 500 }} items={collapseItems} defaultActiveKey={['1']} />
    </div>
  );
};

export default App;
