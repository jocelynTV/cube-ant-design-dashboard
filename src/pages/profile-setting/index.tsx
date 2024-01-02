import React from 'react';
import { Col, Row, Space } from 'antd';
import SettingSideBar from './components/SettingSideBar';
import { Outlet } from 'react-router-dom';
import { ProCard } from '@ant-design/pro-components';

import ProfileHeader from 'pages/profile/components/ProfileHeader';
import { useAppContext } from 'context/AppContext';

const ProfileSetting = () => {
  const appContext = useAppContext();
  return (
    <Space direction="vertical" size={appContext.mobile ? 'middle' : 'large'}>
      <ProfileHeader />
      <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
        <Col span={24} md={8}>
          <SettingSideBar />
        </Col>
        <Col span={24} md={16}>
          <ProCard>
            <Outlet />
          </ProCard>
        </Col>
      </Row>
    </Space>
  );
};

export default ProfileSetting;
