import React from 'react';
import { Button } from 'aelf-design';

import { IStepItem } from '../../RichProgress/index';
import ProgressModal from '../index';

const App: React.FC = () => {
  const [showProgress, setShowProgress] = React.useState(false);
  const steps: IStepItem[] = [
    {
      title: 'Title1Title1Title1',
      subTitle: 'subTitle1subTitle1.',
      percent: 100,
      progressTip: 'About 15 sec',
      status: 'normal',
      available: true,
    },
    {
      title: 'Title2Title2Title2',
      subTitle: 'subTitle2subTitle2subTitle2subTitle2.',
      percent: 60,
      progressTip: 'About 3~5 min',
      status: 'exception',
      available: true,
    },
    {
      title: 'Title3Title3Title3',
      subTitle: 'subTitle3subTitle3subTitle3.',
      percent: 0,
      progressTip: 'About 20 sec',
      status: 'normal',
      available: false,
    },
  ];
  return (
    <div>
      <ProgressModal
        desc="I am a description"
        title="test-progress"
        open={showProgress}
        steps={steps}
        onCancel={() => {
          setShowProgress(false);
        }}
      />
      <Button
        onClick={() => {
          setShowProgress(true);
        }}
      >
        show progress modal demo
      </Button>
    </div>
  );
};

export default App;
