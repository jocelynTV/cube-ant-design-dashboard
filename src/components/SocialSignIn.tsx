import React from 'react';
import { Avatar, Button, Divider, Space } from 'antd';

interface Props {
  title: string;
}

const SocialSignIn: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Divider plain>{title}</Divider>
      <Space size="large">
        <Button icon={<Avatar size={16} src="/images/google.png" />}>
          Google
        </Button>
        <Button icon={<Avatar size={16} src="/images/facebook.png" />}>
          Facebook
        </Button>
      </Space>
    </>
  );
};

export default SocialSignIn;
