import React from 'react';
import { Card, Col, Row, Image, Flex, Typography, Avatar } from 'antd';
import { faker } from '@faker-js/faker';
import { ProCard } from '@ant-design/pro-components';
import { dateToFromNow } from 'utils';

const data = Array.from(Array(12), () => ({
  id: faker.string.uuid(),
  title: faker.music.songName(),
  logo: faker.image.urlLoremFlickr({ category: 'fashion' }),
  members: [faker.image.avatar(), faker.image.avatar(), faker.image.avatar()],
  time: faker.date.recent(),
  description: faker.lorem.sentence(5)
}));

const Project: React.FC = () => {
  return (
    <ProCard title="Projects">
      <Row gutter={[24, 24]}>
        {data.map((item) => {
          return (
            <Col xs={24} sm={12} md={8} lg={8} xl={6} key={item.id}>
              <Card
                className="h-full"
                cover={<Image preview={false} alt="example" src={item.logo} />}
              >
                <Card.Meta title={item.title} description={item.description} />
                <Flex justify="space-between" style={{ marginTop: 24 }}>
                  <Typography.Text type="secondary">
                    {dateToFromNow(item.time)}
                  </Typography.Text>
                  <Avatar.Group>
                    {item.members.map((a, index) => {
                      return <Avatar size={24} src={a} key={index} />;
                    })}
                  </Avatar.Group>
                </Flex>
              </Card>
            </Col>
          );
        })}
      </Row>
    </ProCard>
  );
};

export default Project;
