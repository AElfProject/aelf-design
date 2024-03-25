import React, { forwardRef } from 'react';
import { UploadOutlined } from '@aelf-design/icons';
import { useTheme } from 'antd-style';

import useStyles from './style';

export interface IUploadButtonProps {
  uploadText?: string;
  tips?: React.ReactNode;
  uploadIconColor?: string;
  style?: React.CSSProperties;
  className?: string;
}

const UploadButton = forwardRef<HTMLDivElement, IUploadButtonProps>(
  (props: IUploadButtonProps, ref) => {
    const { uploadIconColor, uploadText, tips, className, style } = props;
    const { styles, cx, prefixCls } = useStyles();
    const token = useTheme();
    return (
      <div
        className={cx(prefixCls + '-upload-button', styles.uploadButton, className)}
        style={style}
        ref={ref}
      >
        <UploadOutlined style={{ fontSize: 40 }} color={uploadIconColor || token.colorPrimary} />
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
  },
);
UploadButton.displayName = 'UploadButton';
export default UploadButton;
