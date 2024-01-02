import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { RuleObject } from 'antd/lib/form';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { ProCard } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';

import { APP_TEXT } from 'config/app';
import SocialSignIn from 'components/SocialSignIn';
import { signUpApi } from 'features/authentication/api';
import { publicRoute } from 'config/route';
import { SignUpInput } from 'features/authentication/type';

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  const validation = (
    rule: RuleObject,
    value: boolean,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
    callback: (error?: any) => void
  ) => {
    if (checked) {
      return callback();
    }
    return callback('Accept privacy policy');
  };

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      navigate(`/${publicRoute.verifyaccount}?token=${data.token}`);
    }
  });

  const onFinish = async (values: SignUpInput) => {
    await mutate(values);
  };

  return (
    <>
      <Title level={3} className="mb-0">
        Welcome To {APP_TEXT}
      </Title>
      <Paragraph type="secondary">Please sign up to continue</Paragraph>
      <ProCard className="signin-card">
        <Form
          layout="vertical"
          autoComplete="off"
          size="large"
          onFinish={onFinish}
        >
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Full Name" prefix={<UserOutlined />} />
          </Form.Item>
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
            <Input placeholder="Email" type="email" prefix={<MailOutlined />} />
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
            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item
            style={{ textAlign: 'left' }}
            name="term"
            valuePropName="checked"
            rules={[{ validator: validation }]}
          >
            <Checkbox checked={checked} onChange={onCheckboxChange}>
              I agree with <Text type="secondary">privacy policy</Text>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button loading={isPending} block type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Paragraph type="secondary">
          Already have an account? <Link to={publicRoute.signin}>Sign In</Link>
        </Paragraph>
        <SocialSignIn title="Or Sign Up With Email" />
      </ProCard>
    </>
  );
};

export default SignUp;
