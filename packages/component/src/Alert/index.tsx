import React from 'react';
import { AlertProps, Alert as AntdAlert } from 'antd';

export interface IAlertProps extends AlertProps {}

const InternalAlert = (props: IAlertProps) => {
  return <AntdAlert {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  InternalAlert.displayName = 'Alert';
}

type ComputedAlert = typeof InternalAlert & {
  ErrorBoundary: typeof AntdAlert.ErrorBoundary;
};

const Alert = InternalAlert as ComputedAlert;
Alert.ErrorBoundary = AntdAlert.ErrorBoundary;
export default Alert;
