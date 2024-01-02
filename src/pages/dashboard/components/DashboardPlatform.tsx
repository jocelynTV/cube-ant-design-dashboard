import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Button, Typography } from 'antd';
import LineChart from './charts/LineChart';

const { Text } = Typography;

const DashboardPlatform = () => {
  return (
    <ProCard
      className="h-full"
      extra={<Button type="text" icon={<DownloadOutlined />} />}
      title="Platform"
    >
      <Text type="secondary">
        Than last week <Text type="success">+30%</Text>
      </Text>
      <LineChart />
    </ProCard>
  );
};

export default DashboardPlatform;
