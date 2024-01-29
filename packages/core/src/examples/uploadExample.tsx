import Upload from 'components/Upload'
import React, { useState } from 'react'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import { UploadProps } from 'antd'
import { useAWSUploadService } from 'hooks/useAws'
const AWSUpload = () => {
  const [fileList, setFileList] = useState<any[]>([])
  const { awsUploadFile } = useAWSUploadService()
  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    let newFileList = [...fileList]
    newFileList = newFileList
      .map((file) => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })
      .filter((item) => item.status !== 'error')
    setFileList([...newFileList])
  }
  const customUpload = async ({
    file,
    onSuccess,
    onError
  }: UploadRequestOption) => {
    try {
      const uploadFile = await awsUploadFile(file as File)
      console.log(uploadFile, 'uploadFile')
      onSuccess &&
        onSuccess({
          url: uploadFile
        })
    } catch (error) {
      onError && onError(error as Error)
    }
  }

  return (
    <Upload
      fileList={fileList}
      customRequest={customUpload}
      onChange={handleChange}
    />
  )
}

const FileUpload = () => {
  const [fileList, setFileList] = useState<any[]>([])
  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    const newFileList = [...fileList]
    setFileList([...newFileList])
  }
  return (
    <Upload
      fileList={fileList}
      onChange={handleChange}
      tips={'Formats supported JPG, JPEG, PNG. Max size 100MB.'}
    />
  )
}

const UploadExample: React.FC = () => (
  <div>
    <AWSUpload />
    <FileUpload></FileUpload>
  </div>
)

export default UploadExample
