import React, { useEffect, useState } from 'react';
import { Button, Typography, Form, Input, Result } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';
import { ProCard } from '@ant-design/pro-components';

import {
  checkInvalidTokenApi,
  verifyAccountApi
} from 'features/authentication/api';
import { VerifyAccountInput } from 'features/authentication/type';
import { protectRoute, publicRoute } from 'config/route';

const { Paragraph, Title } = Typography;

const VerifyAccount = () => {
  const [token, setToken] = useState<string>('');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { isError, isLoading } = useQuery({
    queryKey: ['checkInvalidTokenApi', token],
    queryFn: () => checkInvalidTokenApi(token),
    enabled: !!token
  });

  const { mutate, isPending } = useMutation({
    mutationFn: verifyAccountApi,
    onSuccess: () => {
      navigate(`/${protectRoute.dashboard}`);
    }
  });

  useEffect(() => {
    if (searchParams.get('token')) {
      setToken(searchParams.get('token') || '');
    }
  }, [searchParams.get('token')]);

  const onFinish = async (values: VerifyAccountInput) => {
    await mutate(values);
  };

  if (isError || !token) {
    return (
      <>
        <Title level={3} className="mb-0">
          Verify Your Account
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
        Verify Your Account
      </Title>
      <Paragraph type="secondary">
        We have sent a verification code to your email
      </Paragraph>
      <ProCard className="signin-card">
        <Form
          size="large"
          autoComplete="off"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ token }}
        >
          <Form.Item
            name="code"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder="Enter code" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item
            hidden
            name="token"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input type="hidden" />
          </Form.Item>
          <Form.Item>
            <Button loading={isPending} block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Paragraph type="secondary">
          Have you already verify account?{' '}
          <Link to={publicRoute.signin}>Sign In</Link>
        </Paragraph>
      </ProCard>
    </>
  );
};

export default VerifyAccount;
