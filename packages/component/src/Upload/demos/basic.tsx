import React, { useState } from 'react';
import { Upload, UploadButton } from 'aelf-design';
import { UploadProps, UploadRequestOption } from 'antd';

// import type { UploadRequestOption } from 'rc-upload/lib/interface';

import { useAWSUploadService } from '../../hooks/useAws';

const AWSUpload = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const { awsUploadFile } = useAWSUploadService();
  const handleChange: UploadProps['onChange'] = (info) => {
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
  const customUpload = async ({ file, onSuccess, onError }: UploadRequestOption) => {
    try {
      const uploadFile = await awsUploadFile(file as File);
      console.log(uploadFile, 'uploadFile');
      onSuccess?.({
        url: uploadFile,
      });
    } catch (error) {
      onError?.(error as Error);
    }
  };

  return <Upload fileList={fileList} customRequest={customUpload} onChange={handleChange} />;
};

const FileUpload = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const handleChange: UploadProps['onChange'] = (info) => {
    const newFileList = [...info.fileList];
    setFileList([...newFileList]);
  };
  return (
    <Upload
      fileList={fileList}
      onChange={handleChange}
      uploadIconColor="green"
      tips={'Formats supported JPG, JPEG, PNG. Max size 100MB.'}
    />
  );
};

const UploadExample: React.FC = () => (
  <div>
    <AWSUpload />
    <FileUpload></FileUpload>
    <UploadButton />
  </div>
);

export default UploadExample;

// const App: React.FC = () => {
//   return (
//     <AELFDProvider prefixCls="zhaomeng">
//       <Address address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />;
//     </AELFDProvider>
//   );
// };

// export default App;
