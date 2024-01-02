import React from 'react';
import { Button, Form, Input, message } from 'antd';

import { buttonSave, textAction } from 'config/text';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { userUpdatePasswordApi } from 'features/user/api';
import { publicRoute } from 'config/route';
import { UserUpdatePasswordInput } from 'features/user/type';

const SettingChangePassword = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: userUpdatePasswordApi,
    onSuccess: () => {
      message.success(textAction.update);
      navigate(publicRoute.signin);
    }
  });

  const onFinish = async (values: UserUpdatePasswordInput) => {
    await mutate(values);
  };

  return (
    <Form layout="vertical" autoComplete="off" onFinish={onFinish}>
      <Form.Item
        label="Current Password"
        name="passwordOld"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true
          },
          {
            validator: (_, value) =>
              !value.includes(' ')
                ? Promise.resolve()
                : Promise.reject(new Error('No spaces allowed'))
          },
          {
            min: 6
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirm"
        rules={[
          {
            required: true
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The new password that you entered do not match!')
              );
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button loading={isPending} type="primary" htmlType="submit" block>
          {buttonSave.update}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingChangePassword;
