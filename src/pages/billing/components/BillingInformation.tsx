import React from 'react';
import { Button, Space } from 'antd';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { faker } from '@faker-js/faker';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { buttonAction } from 'config/text';

const cards = Array.from(Array(3), () => ({
  name: faker.finance.accountName(),
  company: faker.company.name(),
  email: faker.internet.email(),
  vat: faker.string.numeric(5)
}));

const BillingInformation = () => {
  return (
    <ProCard className="h-full" title="Billing Information">
      <Space direction="vertical" size="large">
        {cards.map((i, index) => (
          <ProCard
            key={index}
            bordered
            title={i.name}
            extra={
              <>
                <Button type="link" danger icon={<DeleteOutlined />}>
                  {buttonAction.detele}
                </Button>
                <Button type="link" icon={<EditOutlined />}>
                  {buttonAction.edit}
                </Button>
              </>
            }
          >
            <ProDescriptions dataSource={i}>
              <ProDescriptions.Item
                label="Company Name"
                span={3}
                dataIndex="company"
              />
              <ProDescriptions.Item
                label="Email Address"
                span={3}
                dataIndex="email"
              />
              <ProDescriptions.Item
                label="VAT Number"
                span={3}
                dataIndex="vat"
              />
            </ProDescriptions>
          </ProCard>
        ))}
      </Space>
    </ProCard>
  );
};

export default BillingInformation;
