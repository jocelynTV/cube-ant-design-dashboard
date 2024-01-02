import React from 'react';
import { Row, Col, Button, Typography, Image, Flex } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { faker } from '@faker-js/faker';
import { dateToFormat } from 'utils';

const cards = Array.from(Array(3), () => ({
  number: faker.finance.accountNumber(4),
  name: faker.finance.accountName(),
  logo: faker.helpers.arrayElement([
    '/images/mastercard.svg',
    '/images/visa.png',
    '/images/jcb.png'
  ]),
  type: 'card',
  expire: dateToFormat(faker.date.future(), 'MM/YY')
}));

const PaymentMethods = () => {
  return (
    <ProCard
      className="h-full"
      extra={<Button type="primary">Add New Card</Button>}
      title="Payment Methods"
    >
      <Row gutter={[24, 24]}>
        {cards.map((item) => {
          return (
            <Col key={item.number} xs={24} lg={8} xl={24}>
              <ProCard className="payment-method-card" bordered>
                <Flex align="center" justify="space-between">
                  <Image
                    width={40}
                    preview={false}
                    src={item.logo}
                    alt={item.type}
                  />
                  <Typography.Title level={5} style={{ margin: 0 }}>
                    **** **** **** {item.number}
                  </Typography.Title>
                  <Button type="link" icon={<EditOutlined />}></Button>
                </Flex>
              </ProCard>
            </Col>
          );
        })}
      </Row>
    </ProCard>
  );
};

export default PaymentMethods;
