import React from 'react';
import { Card, Avatar } from 'antd';
import { useAppContext } from 'context/AppContext';

const ProfileHeader = () => {
  const appContext = useAppContext();

  return (
    <Card bordered={false}>
      <Card.Meta
        avatar={<Avatar size={60} src={appContext.userInfo?.avatar} />}
        title={appContext.userInfo?.name}
        description={appContext.userInfo?.jobTitle}
      />
    </Card>
  );
};

export default ProfileHeader;
