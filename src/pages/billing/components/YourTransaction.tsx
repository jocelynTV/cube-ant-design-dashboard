import React from 'react';
import { List, Typography } from 'antd';
import type { BaseType } from 'antd/es/typography/Base';
import { ProCard } from '@ant-design/pro-components';
import { faker } from '@faker-js/faker';
import { dateToFormat } from 'utils';

const newest = Array.from(Array(3), () => ({
  title: faker.company.name(),
  time: faker.date.recent(),
  amountcolor: faker.helpers.arrayElement(['success', 'danger']),
  amount: faker.commerce.price()
}));

const yesterday = Array.from(Array(5), () => ({
  title: faker.company.name(),
  time: faker.date.recent(),
  amountcolor: faker.helpers.arrayElement(['success', 'danger']),
  amount: faker.commerce.price()
}));

const YourTransaction = () => {
  return (
    <ProCard className="h-full" title="Your Transactions">
      <List
        header={
          <Typography.Paragraph type="secondary">NEWEST</Typography.Paragraph>
        }
        itemLayout="horizontal"
        dataSource={newest}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={dateToFormat(item.time, 'DD MMM YYYY, LT')}
            />
            <Typography.Text type={item.amountcolor as BaseType}>
              {item.amountcolor === 'success' ? '+' : '-'} ${item.amount}
            </Typography.Text>
          </List.Item>
        )}
      />
      <List
        header={
          <Typography.Paragraph type="secondary">
            YESTERDAY
          </Typography.Paragraph>
        }
        itemLayout="horizontal"
        dataSource={yesterday}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={dateToFormat(item.time, 'DD MMM YYYY, LT')}
            />
            <Typography.Text type={item.amountcolor as BaseType}>
              {item.amountcolor === 'success' ? '+' : '-'} ${item.amount}
            </Typography.Text>
          </List.Item>
        )}
      />
    </ProCard>
  );
};

export default YourTransaction;
