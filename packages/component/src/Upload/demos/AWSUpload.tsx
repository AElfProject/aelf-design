import React, { useState } from 'react';
import {
  Button,
  Input,
  IUploadProps,
  IUploadService,
  Upload,
  useAWSUploadService,
} from 'aelf-design';
import { Form, FormProps } from 'antd';

const AWSUpload = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [serviceForm, setServiceForm] = useState<IUploadService>({
    identityPoolID: '',
    region: '',
    bucket: '',
  });
  const { awsUploadFile } = useAWSUploadService(serviceForm);
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

  const onFinish: FormProps<IUploadService>['onFinish'] = (values) => {
    console.log('Success:', values);
    setServiceForm(values);
  };

  const onFinishFailed: FormProps<IUploadService>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
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

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<IUploadService>
          label="identityPoolID"
          name="identityPoolID"
          rules={[{ required: true, message: 'Please input your identityPoolID!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IUploadService>
          label="region"
          name="region"
          rules={[{ required: true, message: 'Please input your region!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<IUploadService>
          label="bucket"
          name="bucket"
          rules={[{ required: true, message: 'Please input your bucket!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Upload fileList={fileList} customRequest={customUpload} onChange={handleChange} />
    </div>
  );
};

const App: React.FC = () => (
  <div>
    <AWSUpload />
  </div>
);

export default App;
