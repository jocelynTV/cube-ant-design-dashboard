import React from 'react';
import { ProDescriptions, ProList } from '@ant-design/pro-components';
import { DownloadOutlined } from '@ant-design/icons';
import { faker } from '@faker-js/faker';
import { Button } from 'antd';

import { dateToFormat } from 'utils';

interface DataItem {
  id: string;
  title: Date;
  description: string;
  amount: string;
}

const data = Array.from(Array(5), () => ({
  id: faker.string.uuid(),
  title: faker.date.past(),
  description: `MS-${faker.string.numeric(5)}`,
  amount: faker.commerce.price({ symbol: '$' })
}));

const Invoices = () => {
  return (
    <ProList<DataItem>
      rowKey="id"
      className="h-full"
      headerTitle="Invoices"
      dataSource={data}
      metas={{
        title: {
          dataIndex: 'title',
          render: (_, record) => (
            <>{dateToFormat(record.title, 'MMMM, DD, YYYY')}</>
          )
        },
        description: {
          dataIndex: 'description'
        },
        extra: {
          valueType: 'money',
          dataIndex: 'amount',
          render: () => (
            <Button key={1} type="link" icon={<DownloadOutlined />}>
              PDF
            </Button>
          )
        },
        actions: {
          render: (_, record) => [
            <ProDescriptions.Item key="amount" valueType="money">
              {record.amount}
            </ProDescriptions.Item>
          ]
        }
      }}
    />
  );
};

export default Invoices;
