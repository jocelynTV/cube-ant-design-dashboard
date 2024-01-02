import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { StatisticCard } from '@ant-design/pro-components';
import {
  DollarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  SendOutlined
} from '@ant-design/icons';
import { APP_MAIN_COLOR } from 'config/app';
import { useAppContext } from 'context/AppContext';

const { Statistic } = StatisticCard;

const DashboardOverview = () => {
  const appContext = useAppContext();
  return (
    <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
        <StatisticCard
          chart={
            <Avatar
              style={{ backgroundColor: APP_MAIN_COLOR }}
              shape="square"
              icon={<DollarOutlined />}
            />
          }
          chartPlacement="left"
          statistic={{
            title: 'Income',
            prefix: '$',
            value: 53000,
            description: (
              <Statistic
                className="stat-sub"
                value={30}
                suffix="%"
                trend="up"
              />
            )
          }}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
        <StatisticCard
          chart={
            <Avatar
              style={{ backgroundColor: APP_MAIN_COLOR }}
              shape="square"
              icon={<CheckOutlined />}
            />
          }
          chartPlacement="left"
          statistic={{
            title: 'Completed',
            value: 3200,
            prefix: '+',
            description: (
              <Statistic
                className="stat-sub"
                value={20}
                suffix="%"
                trend="down"
              />
            )
          }}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
        <StatisticCard
          className="h-full"
          chart={
            <Avatar
              style={{ backgroundColor: APP_MAIN_COLOR }}
              shape="square"
              icon={<ClockCircleOutlined />}
            />
          }
          chartPlacement="left"
          statistic={{
            title: 'Pending',
            value: 1200
          }}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
        <StatisticCard
          className="h-full"
          chart={
            <Avatar
              style={{ backgroundColor: APP_MAIN_COLOR }}
              shape="square"
              icon={<SendOutlined />}
            />
          }
          chartPlacement="left"
          statistic={{
            title: 'Dispatch',
            value: 13200
          }}
        />
      </Col>
    </Row>
  );
};

export default DashboardOverview;
