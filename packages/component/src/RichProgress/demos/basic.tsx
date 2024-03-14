import React from 'react';
import { IProgressStepItem, RichProgress } from 'aelf-design';

const App: React.FC = () => {
  const steps: IProgressStepItem[] = [
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
      <RichProgress stepsData={steps} />
    </div>
  );
};

export default App;
