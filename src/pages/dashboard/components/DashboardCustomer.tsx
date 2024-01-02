import React from 'react';
import { Typography, Flex } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import BarChart from './charts/BarChart';

const { Title, Text, Paragraph } = Typography;

const items = [
  {
    Title: '3,6K',
    user: 'Users'
  },
  {
    Title: '2m',
    user: 'Clicks'
  },
  {
    Title: '$772',
    user: 'Sales'
  },
  {
    Title: '82',
    user: 'Items'
  }
];

const DashboardCustomer = () => {
  return (
    <ProCard title="Customer" className="h-full">
      <BarChart />
      <div>
        <Title className="mb-0" level={5}>
          Customer Analytics
        </Title>
        <Paragraph>
          <Text type="secondary">
            than last week <Text type="success">+30%</Text>
          </Text>
        </Paragraph>
        <Paragraph type="secondary">
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </Paragraph>
        <Flex justify="space-between">
          {items.map((v, index) => (
            <div key={index}>
              <Title level={4}>{v.Title}</Title>
              <Text>{v.user}</Text>
            </div>
          ))}
        </Flex>
      </div>
    </ProCard>
  );
};

export default DashboardCustomer;
