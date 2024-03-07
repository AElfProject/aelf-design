import React from 'react';
import {
  CircleCloseIcon,
  ClearIcon,
  EyeInvisibleOutlinedIcon,
  EyeTwoToneIcon,
} from '@aelf-design/internal-icons';
import { HashAddress } from 'aelf-design';

const App: React.FC = () => {
  // const token = useTheme();
  return (
    <div>
      <HashAddress address="oxffffffsjlkewieowiewoiewopipoe" />
      <div></div>
      <CircleCloseIcon />
    </div>
  );
};

export default App;
