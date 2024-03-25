import React, { forwardRef, ReactElement, ReactNode } from 'react';
import { DeleteOutlined, ShareExternalOutlined } from '@aelf-design/icons';
import { Upload as AntdUpload, UploadProps as AntdUploadProps, Image } from 'antd';
import { useTheme } from 'antd-style';
import { UploadFile } from 'antd/es/upload';
import { UploadRef } from 'antd/es/upload/Upload';

import UploadButton from '../UploadButton';
import useStyles from './style';

export interface IUploadProps extends Omit<AntdUploadProps, 'listType' | 'itemRender'> {
  tips?: string | ReactNode;
  uploadText?: string;
  uploadIconColor?: string;
  showUploadButton?: boolean;
}

function UploadItemRender({
  file,
  actions,
}: {
  originNode: ReactElement;
  file: UploadFile;
  fileList: object[];
  actions: { download: () => void; preview: () => void; remove: () => void };
}) {
  const { styles, cx } = useStyles();
  const token = useTheme();
  return file.url || file.thumbUrl ? (
    (file.status === 'done' && (
      <div className={cx(styles.previewContainer)}>
        <Image
          height={202}
          width="100%"
          className="preview-img"
          src={file?.response?.url || file.url || file.thumbUrl}
        />
        <div className="file-info">
          <div className={cx('fileName')}>{file.name}</div>
          <div
            className="clear-container"
            onClick={() => {
              actions.remove();
            }}
          >
            <DeleteOutlined
              color={token.colorPrimary}
              hoverColor={token.colorPrimaryHover}
              activeColor={token.colorPrimaryActive}
            />
            <span className="clear-text">Delete</span>
          </div>
        </div>
      </div>
    )) ||
      null
  ) : (
    <div className={cx(styles.FilePreviewContainer)}>
      <div className="file-icon-container">
        <ShareExternalOutlined />
        <div className="file-tips">Ready for review</div>
      </div>
      <div className="file-info">
        <div className={cx('fileName')}>{file.name}</div>
        <div
          className="clear-container"
          onClick={() => {
            actions.remove();
          }}
        >
          <DeleteOutlined
            color={token.colorPrimary}
            hoverColor={token.colorPrimaryHover}
            activeColor={token.colorPrimaryActive}
          />
          <span className="clear-text">Remove</span>
        </div>
      </div>
    </div>
  );
}

const InternalUpload = forwardRef<UploadRef, IUploadProps>((props: IUploadProps, ref) => {
  const { styles, cx, prefixCls } = useStyles();
  const { tips, showUploadButton = true, uploadText, uploadIconColor } = props;
  return (
    <div className={(cx(prefixCls + '-upload-container'), styles.AelfdUploadContainer)}>
      <AntdUpload
        {...props}
        listType="picture-card"
        ref={ref}
        itemRender={(originNode, file, fileList, actions) => {
          return (
            <UploadItemRender
              originNode={originNode}
              file={file}
              fileList={fileList}
              actions={actions}
            />
          );
        }}
      >
        {showUploadButton && (
          <UploadButton uploadIconColor={uploadIconColor} tips={tips} uploadText={uploadText} />
        )}
      </AntdUpload>
    </div>
  );
});
InternalUpload.displayName = 'Upload';
type InternalUploadType = typeof InternalUpload;
type CompoundedComponent = InternalUploadType & {
  LIST_IGNORE: string;
};
const Upload = InternalUpload as CompoundedComponent;

Upload.LIST_IGNORE = AntdUpload.LIST_IGNORE;

export default Upload;
