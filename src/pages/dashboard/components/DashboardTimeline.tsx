import React from 'react';
import { faker } from '@faker-js/faker';
import { Button, Timeline, Typography } from 'antd';
import { ProCard } from '@ant-design/pro-components';

import { dateToFromNow } from 'utils';

const items = Array.from(Array(8), () => ({
  children: (
    <>
      <Typography.Paragraph strong className="mb-0">
        {faker.lorem.sentence()}
      </Typography.Paragraph>
      <Typography.Text type="secondary">
        {dateToFromNow(faker.date.recent())}
      </Typography.Text>
    </>
  ),
  color: faker.helpers.arrayElement(['blue', 'gray', 'green', 'red'])
}));

const DashboardTimeline = () => {
  return (
    <ProCard
      className="h-full"
      title="User Activity"
      extra={<Button type="link">View All</Button>}
    >
      <Timeline mode="left" items={items} />
    </ProCard>
  );
};

export default DashboardTimeline;
