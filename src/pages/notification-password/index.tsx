import React from 'react';
import { Button, Image, Result, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ProCard } from '@ant-design/pro-components';
import { publicRoute } from 'config/route';

const { Paragraph, Title } = Typography;

const NotificationPassword = () => {
  return (
    <>
      <Title level={3} className="mb-0">
        Reset Password
      </Title>
      <Paragraph type="secondary">
        We have sent a verification code to your email
      </Paragraph>
      <ProCard className="signin-card">
        <Result
          status="success"
          icon={<Image preview={false} src="/images/email.png" />}
          subTitle="Please check your email to reset your password"
          extra={[
            <Button type="primary" key="signup">
              <Link to={`/${publicRoute.signup}`}>Create Account</Link>
            </Button>,
            <Button key="signin">
              <Link to={publicRoute.signin}>Sign In</Link>
            </Button>
          ]}
        />
      </ProCard>
    </>
  );
};

export default NotificationPassword;
