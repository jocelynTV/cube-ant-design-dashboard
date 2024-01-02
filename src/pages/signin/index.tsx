import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Form, Input, Checkbox, Flex } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';

import SocialSignIn from 'components/SocialSignIn';
import { signInApi } from 'features/authentication/api';
import { SignInInput } from 'features/authentication/type';
import { protectRoute, publicRoute } from 'config/route';

const { Paragraph, Title } = Typography;

const SignIn = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: signInApi,
    onSuccess: () => {
      navigate(protectRoute.dashboard);
    }
  });

  const onFinish = async (values: SignInInput) => {
    await mutate(values);
  };

  return (
    <>
      <Title level={3} className="mb-0">
        Welcome Back
      </Title>
      <Paragraph type="secondary">Please sign in to continue</Paragraph>
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
          <Form.Item
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
            <Input.Password
              placeholder="Enter Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Flex justify="space-between">
            <Form.Item
              name="remember"
              valuePropName="checked"
              style={{ marginTop: -5 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Paragraph className="text-right" type="secondary">
              <Link
                to={`/${[publicRoute.forgotpassword]}`}
                style={{ color: 'inherit' }}
              >
                Forgot Password?
              </Link>
            </Paragraph>
          </Flex>
          <Form.Item>
            <Button block type="primary" htmlType="submit" loading={isPending}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Paragraph type="secondary">
          Dont have Account? <Link to={publicRoute.signup}>Create account</Link>
        </Paragraph>
        <SocialSignIn title="Or" />
      </ProCard>
    </>
  );
};

export default SignIn;
