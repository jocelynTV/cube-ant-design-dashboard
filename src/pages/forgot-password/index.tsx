import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { forgotPasswordApi } from 'features/authentication/api';
import { useMutation } from '@tanstack/react-query';

import { publicRoute } from 'config/route';
import { ForgotPasswordInput } from 'features/authentication/type';

const { Paragraph, Title } = Typography;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: () => {
      navigate(`/${publicRoute.notificationpassword}`);
    }
  });

  const onFinish = async (values: ForgotPasswordInput) => {
    await mutate(values);
  };

  return (
    <>
      <Title level={3} className="mb-0">
        Forgot Password?
      </Title>
      <Paragraph type="secondary">
        Enter your email to reset your password.
      </Paragraph>
      <ProCard className="signin-card">
        <Form
          layout="vertical"
          autoComplete="off"
          size="large"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true
              },
              {
                type: 'email'
              }
            ]}
          >
            <Input
              placeholder="Enter Email"
              type="email"
              prefix={<MailOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button loading={isPending} block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Paragraph type="secondary">
          Dont have Account?{' '}
          <Link to={`/${publicRoute.signup}`}>Create account</Link>
        </Paragraph>
      </ProCard>
    </>
  );
};

export default ForgotPassword;
