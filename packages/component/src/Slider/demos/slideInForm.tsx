import React, { useState } from 'react';
import { SliderBindInput } from 'aelf-design';
import { Button, Checkbox, Form, Input, type FormProps } from 'antd';

const App: React.FC = () => {
  const [v, setv] = useState<any>(null);
  const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Success:', values);
    setv(values);
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ username: 90 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>结合表单验证</Form.Item>
      <Form.Item
        label="username"
        name="username"
        rules={[
          { required: true, min: 20, max: 60, message: 'Please input 20~60', type: 'number' },
        ]}
      >
        <SliderBindInput />
      </Form.Item>
      <Form.Item
        label="username1"
        name="username1"
        rules={[{ required: true, min: 0, max: 80, message: 'Please input 0~80', type: 'number' }]}
      >
        <SliderBindInput />
      </Form.Item>
      <Form.Item label="pwd" name="pwd">
        <SliderBindInput />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {JSON.stringify(v, null, 2)}
    </Form>
  );
};

export default App;
