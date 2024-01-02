import React from 'react';
import { Flex, Image, Space, Typography } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import { faker } from '@faker-js/faker';
import { dateToFormat } from 'utils';
import { useAppContext } from 'context/AppContext';

const { Title } = Typography;

const cards = Array.from(Array(5), () => ({
  number: faker.finance.creditCardNumber(),
  name: faker.finance.accountName(),
  type: faker.helpers.arrayElement(['mastercard', 'visa', 'jcb']),
  expire: dateToFormat(faker.date.future(), 'MM/YY')
}));

const CardInfo = () => {
  const appContext = useAppContext();
  return (
    <div className="card-scroll">
      <Space size={appContext.mobile ? 'middle' : 'large'}>
        {cards.map((item, index) => {
          return (
            <ProCard
              key={index}
              title={item.type}
              className={`card-credit h-full card-credit-${index % 3}`}
            >
              <Flex vertical justify="space-between">
                <div className="title">
                  <Title level={4}>{item.number}</Title>
                </div>
                <div>
                  <Flex justify="space-between" align="center">
                    <div>
                      <Title level={5} style={{ margin: 0 }}>
                        {item.expire}
                      </Title>
                      <Title level={5} style={{ margin: 0 }}>
                        {item.name}
                      </Title>
                    </div>
                    <div>
                      <Image
                        width={50}
                        preview={false}
                        src={`/images/${item.type}.svg`}
                        alt={item.type}
                      />
                    </div>
                  </Flex>
                </div>
              </Flex>
            </ProCard>
          );
        })}
      </Space>
    </div>
  );
};

export default CardInfo;
