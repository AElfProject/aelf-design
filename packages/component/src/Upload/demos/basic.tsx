import React, { useState } from 'react';
import { Upload } from 'aelf-design';
import { UploadProps } from 'antd';

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

const App: React.FC = () => (
  <div>
    <FileUpload></FileUpload>
  </div>
);

export default App;
