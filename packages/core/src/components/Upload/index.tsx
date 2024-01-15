import {
  Upload as AntdUpload,
  UploadProps as AntdUploadProps,
  Image
} from 'antd'
import useStyles from './style'
import { ReactElement, ReactNode, useState } from 'react'
import UploadIcon from 'assets/upload-icon.svg?react'
import ClearIcon from 'assets/clear-icon.svg?react'
import { useTheme } from 'antd-style'
import { RcFile, UploadFile } from 'antd/es/upload'

export interface IUploadProps
  extends Omit<AntdUploadProps, 'listType' | 'itemRender'> {
  tips?: string | ReactNode
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

function UploadItemRender({
  originNode,
  file,
  fileList,
  actions
}: {
  originNode: ReactElement
  file: UploadFile
  fileList: object[]
  actions: { download: () => void; preview: () => void; remove: () => void }
}) {
  const [previewUrl, setPreviewUrl] = useState<string>()
  const { styles, cx } = useStyles()
  const token = useTheme()
  getBase64(file.originFileObj as RcFile, (url) => {
    setPreviewUrl(url)
  })
  return (
    <div className={cx(styles.previewContainer)}>
      {previewUrl && <Image height={202} src={previewUrl} />}
      <div className="file-info">
        <div className={cx('fileName')}>{file.name}</div>
        <div
          className="clear-container"
          onClick={() => {
            actions.remove()
          }}
        >
          <ClearIcon
            color={token.colorPrimary}
            data-hovercolor={token.colorPrimaryHover}
            data-activecolor={token.colorPrimaryActive}
            width={16}
            height={16}
          />
          <span className="clear-text">Delete</span>
        </div>
      </div>
    </div>
  )
}

function Upload(props: IUploadProps) {
  const { styles, cx, prefixCls } = useStyles()
  const token = useTheme()
  const { tips } = props
  return (
    <div
      className={
        (cx(prefixCls + '-upload-container'), styles.AelfdUploadContainer)
      }
    >
      <AntdUpload
        {...props}
        listType="picture-card"
        itemRender={(originNode, file, fileList, actions) => {
          return (
            <UploadItemRender
              originNode={originNode}
              file={file}
              fileList={fileList}
              actions={actions}
            />
          )
        }}
      >
        <div className={cx(prefixCls + '-upload-button', styles.uploadButton)}>
          <UploadIcon
            color={token.colorPrimary}
            data-hovercolor={token.colorPrimaryHover}
            data-activecolor={token.colorPrimaryActive}
            width={40}
            height={40}
          />
          <div className={styles.message}>
            <div className={styles.uploadText}>Upload</div>
            {tips || (
              <>
                <div className={styles.messageTitle}>
                  Formats supported JPG, JPEG, PNG. Max size 100 MB.
                </div>
                <div className={styles.messageSubTitle}>
                  Recommend ratio 16:9.
                </div>
              </>
            )}
          </div>
        </div>
      </AntdUpload>
    </div>
  )
}

Upload.LIST_IGNORE = AntdUpload.LIST_IGNORE

export default Upload
