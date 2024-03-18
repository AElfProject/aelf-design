import React, { memo, ReactNode } from 'react';
import { ProgressErrorIcon, ProgressSuccessIcon } from '@aelf-design/internal-icons';
import { useResponsive } from 'antd-style';

import Progress from '../Progress';
import useStyles from './style';

export type ProgressLineType = 'exception' | 'normal';

export interface IStepItem {
  title: ReactNode;
  subTitle: ReactNode;
  percent: number;
  progressTip: ReactNode;
  status: ProgressLineType;
  available: boolean;
}

export interface IProgressStepsProps {
  stepsData: IStepItem[];
  strokeColor?: string;
  strokeErrorColor?: string;
  trailColor?: string;
  successIcon?: ReactNode;
  errorIcon?: ReactNode;
}

const StepItemIcon = ({
  status = 'normal',
  step = 1,
  percent = 0,
  successIcon = null,
  errorIcon = null,
}: {
  step: number;
  status: 'exception' | 'normal';
  percent: number;
  available: boolean;
  successIcon?: ReactNode;
  errorIcon?: ReactNode;
}) => {
  const responsive = useResponsive();
  const { styles, cx } = useStyles();
  if (status === 'exception') {
    return <>{errorIcon}</> || <ProgressErrorIcon className={cx(styles.errorIcon)} />;
  }
  if (percent === 100) {
    return <>{successIcon}</> || <ProgressSuccessIcon className={cx(styles.successIcon)} />;
  }
  return (
    <Progress
      percent={responsive.md ? 0 : percent}
      size={24}
      type="circle"
      strokeLinecap="butt"
      showInfo
      strokeWidth={2}
      format={() => `${step}`}
    ></Progress>
  );
};

const StepItem = ({
  title = '',
  subTitle = '',
  step = 1,
  status = 'normal',
  percent = 0,
  tip = '',
  isLast = false,
  available = true,
  successIcon = null,
  errorIcon = null,
  strokeColor,
  trailColor,
  strokeErrorColor,
}: {
  title: ReactNode;
  subTitle: ReactNode;
  step: number;
  status: 'exception' | 'normal';
  percent: number;
  tip: ReactNode;
  isLast: boolean;
  available: boolean;
  successIcon?: ReactNode;
  errorIcon?: ReactNode;
  strokeColor?: string;
  trailColor?: string;
  strokeErrorColor?: string;
}) => {
  const responsive = useResponsive();
  const { styles, cx, prefixCls } = useStyles();
  return (
    <div className={cx(styles.progressStepItem, prefixCls + '-progress-step-item')}>
      <div className={cx(styles.flex, styles.relative)}>
        <div
          className={cx(
            styles.stepIcon,
            !available && styles.progressIconTextDisabled,
            percent === 100 && styles.stepIconSuccess,
            isLast && styles.progressLast,
          )}
        >
          <StepItemIcon
            status={status}
            step={step}
            percent={percent}
            available={available}
            successIcon={successIcon}
            errorIcon={errorIcon}
          />
        </div>
        <div className={cx(styles.progressText)}>
          <span
            className={cx(
              styles.progressTitle,
              (percent === 100 || !available) && styles.progressTitleDisabled,
            )}
          >
            {title}
          </span>
          <span className={cx(styles.progressSubTitle)}>{subTitle}</span>
          {!responsive.md && <span className={cx(styles.progressTip)}>{tip}</span>}
        </div>
      </div>
      <div
        className={cx(
          styles.progressBar,
          step === 1 && styles.progressBarFirst,
          isLast && styles.progressBarLast,
        )}
      >
        {responsive.md && (
          <Progress
            percent={percent}
            showInfo={false}
            status={status}
            strokeLinecap="butt"
            strokeWidth={8}
            strokeColor={
              strokeColor && strokeErrorColor
                ? status === 'exception'
                  ? strokeErrorColor
                  : strokeColor
                : undefined
            }
            trailColor={trailColor}
          />
        )}
        <div className={cx(styles.progressStepNum)}>
          <span className={cx(styles.stepNumText, !available && styles.stepNumTextDisabled)}>
            Step {step}
          </span>
          <span className={cx(styles.progressTip)}>{tip}</span>
        </div>
      </div>
    </div>
  );
};

const RichProgress = ({
  stepsData,
  trailColor,
  strokeColor,
  strokeErrorColor,
  successIcon,
  errorIcon,
}: IProgressStepsProps) => {
  const { styles, cx, prefixCls } = useStyles();

  return (
    <div className={cx(styles.progressStepsContainer, prefixCls + '-progress-steps-container')}>
      {stepsData.map((stepItem, index) => {
        return (
          <div key={index} className={cx(styles.progressSteps, prefixCls + '-progress-steps')}>
            <StepItem
              step={index + 1}
              status={stepItem.status}
              title={stepItem.title}
              subTitle={stepItem.subTitle}
              percent={stepItem.percent}
              isLast={index + 1 === stepsData.length}
              available={stepItem.available}
              tip={stepItem.progressTip}
              successIcon={successIcon}
              errorIcon={errorIcon}
              trailColor={trailColor}
              strokeColor={strokeColor}
              strokeErrorColor={strokeErrorColor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default memo(RichProgress);
