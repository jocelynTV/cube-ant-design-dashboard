import React from 'react';
import { Row, Col, Space } from 'antd';

import { useAppContext } from 'context/AppContext';
import Information from './components/Information';
import Notification from './components/Notification';
import Project from './components/Project';
import ProfileHeader from './components/ProfileHeader';
import { ProCard } from '@ant-design/pro-components';

const Profile = () => {
  const appContext = useAppContext();

  return (
    <>
      <Space direction="vertical" size="large">
        <ProCard>
          <div
            className="profile-nav-bg"
            style={{
              backgroundImage: 'url(' + appContext.userInfo?.cover + ')'
            }}
          ></div>
          <div className="card-profile-head">
            <ProfileHeader />
          </div>
        </ProCard>
        <Row gutter={[24, 24]}>
          <Col span={24} md={12}>
            <Information userInfo={appContext.userInfo} />
          </Col>
          <Col span={24} md={12}>
            <Notification />
          </Col>
        </Row>
        <Project />
      </Space>
    </>
  );
};

export default Profile;
