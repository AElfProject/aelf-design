import React from 'react';
import { UploadIcon } from '@aelf-design/internal-icons';
import { useTheme } from 'antd-style';

import useStyles from './style';

export interface IUploadButtonProps {
  uploadText?: string;
  tips?: React.ReactNode;
  uploadIconColor?: string;
}

export default function UploadButton(props: IUploadButtonProps) {
  const { uploadIconColor, uploadText, tips } = props;
  const { styles, cx, prefixCls } = useStyles();
  const token = useTheme();
  return (
    <div className={cx(prefixCls + '-upload-button', styles.uploadButton)}>
      <UploadIcon color={uploadIconColor || token.colorPrimary} width={40} height={40} />
      <div className={styles.message}>
        <div className={styles.uploadText}>{uploadText || 'Upload'}</div>
        {tips || (
          <>
            <div className={styles.messageTitle}>
              {`Formats supported JPG, JPEG, PNG. Max size 100MB.`}
              {`Recommend ratio 16:9.`}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
