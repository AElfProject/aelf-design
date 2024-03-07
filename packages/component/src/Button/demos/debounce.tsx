import React from 'react';
import { Button } from 'aelf-design';

const App: React.FC = () => {
  return (
    <div>
      <Button
        type="primary"
        size="medium"
        millisecondOfThrottle={1000}
        onClick={() => {
          console.log('send');
        }}
      >
        send
      </Button>
    </div>
  );
};

export default App;
