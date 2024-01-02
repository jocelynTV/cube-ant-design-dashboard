import React from 'react';
import { Avatar, Col, List, Progress, Typography, Tree, Divider } from 'antd';
import { faker } from '@faker-js/faker';
import { sizeMemory } from 'utils';
import { ProCard } from '@ant-design/pro-components';
import type { DataNode } from 'antd/es/tree';

const { Title, Text, Paragraph } = Typography;
const { DirectoryTree } = Tree;

const tags = Array.from(Array(5), () => ({
  logo: faker.helpers.arrayElement([
    'https://cdn-icons-png.flaticon.com/128/2659/2659360.png',
    'https://cdn-icons-png.flaticon.com/128/2821/2821739.png',
    'https://cdn-icons-png.flaticon.com/128/3074/3074767.png'
  ]),
  title: faker.system.commonFileType(),
  size: Number(faker.string.numeric(10)),
  description: `${faker.string.numeric(3)} files`
}));

const treeData: DataNode[] = [
  {
    title: 'Documents',
    key: faker.string.uuid(),
    children: [
      {
        title: 'Sheets',
        key: faker.string.uuid()
      },
      {
        title: 'Slides',
        key: faker.string.uuid()
      },
      {
        title: 'Words',
        key: faker.string.uuid()
      }
    ]
  },
  {
    title: 'Application',
    key: faker.string.uuid(),
    children: [
      { title: 'Web Apps', key: faker.string.uuid() },
      {
        title: 'Music',
        key: faker.string.uuid(),
        children: [
          { title: faker.music.songName(), key: faker.string.uuid() },
          { title: faker.music.songName(), key: faker.string.uuid() },
          {
            title: faker.music.songName(),
            key: faker.string.uuid(),
            children: [
              { title: 'LMS App', key: faker.string.uuid() },
              { title: 'Ecommerce', key: faker.string.uuid() },
              {
                title: faker.music.songName(),
                key: faker.string.uuid(),
                children: [
                  { title: faker.music.songName(), key: faker.string.uuid() },
                  { title: faker.music.songName(), key: faker.string.uuid() },
                  {
                    title: faker.music.songName(),
                    key: faker.string.uuid(),
                    children: [
                      {
                        title: faker.music.songName(),
                        key: faker.string.uuid(),
                        children: [
                          {
                            title: faker.music.songName(),
                            key: faker.string.uuid()
                          },
                          {
                            title: faker.music.songName(),
                            key: faker.string.uuid()
                          },
                          {
                            title: faker.music.songName(),
                            key: faker.string.uuid()
                          }
                        ]
                      },
                      {
                        title: faker.music.songName(),
                        key: faker.string.uuid()
                      },
                      {
                        title: faker.music.songName(),
                        key: faker.string.uuid()
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { title: 'Desktop Apps', key: faker.string.uuid() }
    ]
  }
];

const Sidebar = () => {
  return (
    <Col xs={24} sm={24} md={10} lg={9} xl={8}>
      <ProCard className="h-full">
        <Paragraph>My Files</Paragraph>
        <DirectoryTree
          multiple
          icon={
            <Avatar
              size={18}
              shape="square"
              src="https://cdn-icons-png.flaticon.com/128/716/716784.png"
            />
          }
          treeData={treeData}
          style={{ fontSize: 15 }}
        />
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={tags}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar shape="square" size="large" src={item.logo} />}
                title={item.title}
                description={item.description}
              />
              <Text type="secondary">{sizeMemory(item.size)}</Text>
            </List.Item>
          )}
        />
        <Divider />
        <Title level={5} className="mb-0">
          48GB of 50GB
        </Title>
        <Progress percent={90} />
      </ProCard>
    </Col>
  );
};

export default Sidebar;
