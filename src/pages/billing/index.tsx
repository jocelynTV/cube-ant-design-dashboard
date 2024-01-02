import React from 'react';
import { Row, Col, Space } from 'antd';

import YourTransaction from './components/YourTransaction';
import BillingInformation from './components/BillingInformation';
import Invoices from './components/Invoices';
import PaymentMethods from './components/PaymentMethods';
import CardInfo from './components/CardInfo';
import { useAppContext } from 'context/AppContext';

const Billing = () => {
  const appContext = useAppContext();
  return (
    <Space direction="vertical" size={appContext.mobile ? 'middle' : 'large'}>
      <CardInfo />
      <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
        <Col xs={24} xl={16}>
          <Invoices />
        </Col>
        <Col xs={24} xl={8}>
          <PaymentMethods />
        </Col>
      </Row>
      <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
        <Col span={24} md={12} lg={14} xl={16}>
          <BillingInformation />
        </Col>
        <Col span={24} md={12} lg={10} xl={8}>
          <YourTransaction />
        </Col>
      </Row>
    </Space>
  );
};

export default Billing;
