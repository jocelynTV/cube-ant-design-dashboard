import React from 'react';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Divider, Space } from 'antd';

interface Props {
  title: string;
}

const SocialSignIn: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Divider plain>{title}</Divider>
      <Space size="large">
        <Button icon={<FacebookOutlined />}>Google</Button>
        <Button icon={<GoogleOutlined />}>Facebook</Button>
      </Space>
    </>
  );
};

export default SocialSignIn;
