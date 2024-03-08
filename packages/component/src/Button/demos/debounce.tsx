import React, { useCallback, useState } from 'react';
import { Button } from 'aelf-design';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        type="primary"
        size="medium"
        millisecondOfDebounce={1000}
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        debounced button
      </Button>
      <p>current count: {count}</p>
    </div>
  );
};

export default App;
