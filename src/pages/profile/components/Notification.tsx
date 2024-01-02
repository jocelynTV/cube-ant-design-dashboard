import React from 'react';
import { Avatar, Button } from 'antd';
import { faker } from '@faker-js/faker';
import { ProList } from '@ant-design/pro-components';

const action = [
  'https://cdn-icons-png.flaticon.com/128/6711/6711573.png',
  'https://cdn-icons-png.flaticon.com/128/8377/8377219.png',
  'https://cdn-icons-png.flaticon.com/128/469/469340.png'
];

const data = Array.from(Array(8), () => ({
  id: faker.commerce.isbn(10),
  title: faker.company.catchPhrase(),
  status: faker.helpers.arrayElement(action),
  createdAt: faker.date.recent()
}));

type DataItem = (typeof data)[number];

const Notification = () => {
  return (
    <ProList<DataItem>
      className="h-full"
      rowKey="title"
      headerTitle="Notifications"
      dataSource={data}
      toolBarRender={() => {
        return [
          <Button key="view-all" type="link">
            View All
          </Button>
        ];
      }}
      metas={{
        title: {
          dataIndex: 'title'
        },
        avatar: {
          dataIndex: 'status',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          render: (_, record: any) => <Avatar src={record.status} />
        },
        description: {
          valueType: 'dateTime',
          dataIndex: 'createdAt'
        }
      }}
    />
  );
};

export default Notification;
