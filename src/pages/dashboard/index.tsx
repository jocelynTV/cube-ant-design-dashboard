import React from 'react';
import { Col, Row, Space } from 'antd';

import DashboardEChart from './components/DashboardCustomer';
import DashboardPlatform from './components/DashboardPlatform';
import DashboardTimeline from './components/DashboardTimeline';
import DashboardSale from './components/DashboardSale';
import DashboardProduct from './components/DashboardProduct';
import { useAppContext } from 'context/AppContext';

const Dashboard = () => {
  const appContext = useAppContext();
  return (
    <Space direction="vertical" size={appContext.mobile ? 'middle' : 'large'}>
      <DashboardSale />
      <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <DashboardEChart />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
          <DashboardPlatform />
        </Col>
      </Row>
      <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={15}>
          <DashboardProduct />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={9}>
          <DashboardTimeline />
        </Col>
      </Row>
    </Space>
  );
};

export default Dashboard;
