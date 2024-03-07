import React, { useState } from 'react';
import { IUploadProps, Upload } from 'aelf-design';

import { useAWSUploadService } from '../../hooks/useAws';

const AWSUpload = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const { awsUploadFile } = useAWSUploadService();
  const handleChange: IUploadProps['onChange'] = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList
      .map((file) => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      })
      .filter((item) => item.status !== 'error');
    setFileList([...newFileList]);
  };

  const customUpload: IUploadProps['customRequest'] = async ({ file, onSuccess, onError }) => {
    try {
      const uploadFile = await awsUploadFile(file as File);
      onSuccess?.({
        url: uploadFile,
      });
    } catch (error) {
      onError?.(error as Error);
    }
  };

  return <Upload fileList={fileList} customRequest={customUpload} onChange={handleChange} />;
};

const App: React.FC = () => (
  <div>
    <AWSUpload />
  </div>
);

export default App;
