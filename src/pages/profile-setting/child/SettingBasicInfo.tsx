import React, { useEffect } from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import { buttonSave, textAction } from 'config/text';
import { useAppContext } from 'context/AppContext';
import { useMutation } from '@tanstack/react-query';

import { userUpdateBasicApi } from 'features/user/api';
import { UserInfo } from 'features/user/type';

const SettingBasicInfo = () => {
  const [form] = Form.useForm();
  const appContext = useAppContext();

  const { mutate, isPending } = useMutation({
    mutationFn: userUpdateBasicApi,
    onSuccess: (data) => {
      appContext.setUserInfo(data);
      message.success(textAction.update);
    }
  });

  const onFinish = async (values: UserInfo) => {
    await mutate(values);
  };

  useEffect(() => {
    form.setFieldsValue(appContext.userInfo);
  }, [appContext.userInfo]);

  return (
    <Form form={form} autoComplete="off" layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="phone">
        <Input />
      </Form.Item>
      <Form.Item label="Bio" name="bio">
        <Input.TextArea rows={5} maxLength={200} />
      </Form.Item>
      <Form.Item label="Gender" name="gender">
        <Select
          options={[
            { value: 'male', label: 'Male' },
            { value: 'famale', label: 'Famale' }
          ]}
        />
      </Form.Item>
      <Form.Item label="Job Title" name="jobTitle">
        <Input />
      </Form.Item>
      <Form.Item label="Job Descriptor" name="jobDescriptor">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button loading={isPending} type="primary" htmlType="submit" block>
          {buttonSave.update}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingBasicInfo;
