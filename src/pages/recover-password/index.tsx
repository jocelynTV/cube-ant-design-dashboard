import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Typography, Form, Input, Result } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { useMutation, useQuery } from '@tanstack/react-query';

import { publicRoute } from 'config/route';
import {
  checkInvalidTokenApi,
  newPasswordApi
} from 'features/authentication/api';
import { NewPasswordInput } from 'features/authentication/type';

const { Paragraph, Title } = Typography;

const RecoverPassword = () => {
  const [token, setToken] = useState<string>('');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { isError, isLoading } = useQuery({
    queryKey: ['checkInvalidTokenApi', token],
    queryFn: () => checkInvalidTokenApi(token),
    enabled: !!token
  });

  const { mutate, isPending } = useMutation({
    mutationFn: newPasswordApi,
    onSuccess: () => {
      navigate(publicRoute.signin);
    }
  });

  useEffect(() => {
    if (searchParams.get('token')) {
      setToken(searchParams.get('token') || '');
    }
  }, [searchParams.get('token')]);

  const onFinish = async (values: NewPasswordInput) => {
    await mutate(values);
  };

  if (isError || !token) {
    return (
      <>
        <Title level={3} className="mb-0">
          Setup New Password
        </Title>
        <Paragraph type="secondary">
          The link has expired or is invalid lastpass
        </Paragraph>
        <ProCard className="signin-card">
          <Result
            status="error"
            subTitle="The link has expired or is invalid lastpass"
            extra={[
              <Button type="primary" key="signup">
                <Link to={`/${publicRoute.signup}`}>Create account</Link>
              </Button>,
              <Button key="signin">
                <Link to={publicRoute.signin}>Sign In</Link>
              </Button>
            ]}
          />
        </ProCard>
      </>
    );
  }

  if (isLoading) {
    return (
      <ProCard loading className="signin-card" style={{ marginTop: 24 }}>
        <div>Loading</div>
      </ProCard>
    );
  }

  return (
    <>
      <Title level={3} className="mb-0">
        Setup New Password
      </Title>
      <Paragraph type="secondary">
        You are only one step a way from your new password, recover your
        password now.
      </Paragraph>
      <ProCard className="signin-card">
        <Form
          layout="vertical"
          autoComplete="off"
          size="large"
          onFinish={onFinish}
        >
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
          <Form.Item
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
            <Input.Password
              placeholder="Enter Confirm Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button loading={isPending} type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Paragraph type="secondary">
          Have you already reset the password?{' '}
          <Link to={publicRoute.signin}>Sign In</Link>
        </Paragraph>
      </ProCard>
    </>
  );
};

export default RecoverPassword;
