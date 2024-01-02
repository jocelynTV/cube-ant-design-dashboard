import React from 'react';
import { ProTable, ProColumns, ProCard } from '@ant-design/pro-components';
import { faker } from '@faker-js/faker';
import { Avatar, Radio, Space } from 'antd';

interface Product {
  id: string;
  name: string;
  price: string;
  inventory: number;
  image: string;
}

const data = Array.from(Array(10), () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  inventory: faker.helpers.rangeToNumber({ min: 10, max: 100 }),
  image: faker.image.urlLoremFlickr({ category: 'fashion' })
}));

const DashboardProduct = () => {
  const columns: ProColumns<Product>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => {
        return (
          <Space>
            <Avatar shape="square" src={record.image} />
            {record.name}
          </Space>
        );
      }
    },
    {
      title: 'Price',
      valueType: 'money',
      dataIndex: 'price'
    },
    {
      title: 'Inventory',
      dataIndex: 'inventory',
      valueType: 'progress'
    }
  ];

  return (
    <ProCard
      className="h-full"
      title="Product"
      extra={
        <Radio.Group>
          <Radio.Button value="All">All</Radio.Button>
          <Radio.Button value="Trending">High</Radio.Button>
          <Radio.Button value="Top">Low</Radio.Button>
        </Radio.Group>
      }
    >
      <ProTable<Product>
        pagination={false}
        toolBarRender={false}
        search={false}
        dataSource={data}
        rowKey="id"
        columns={columns}
      />
    </ProCard>
  );
};

export default DashboardProduct;
