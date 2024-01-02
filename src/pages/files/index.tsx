import React from 'react';
import {
  Avatar,
  Button,
  Col,
  Row,
  Upload,
  Typography,
  Space,
  Dropdown,
  Card
} from 'antd';
import {
  UploadOutlined,
  EllipsisOutlined,
  DownloadOutlined,
  EditOutlined,
  ShareAltOutlined,
  DeleteOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { faker } from '@faker-js/faker';
import { dateToFromNow, sizeMemory } from 'utils';
import { ProCard, ProColumns, ProTable } from '@ant-design/pro-components';
import { useAppContext } from 'context/AppContext';
import Sidebar from './components/Sidebar';

const { Title } = Typography;

export interface IListFile {
  id: string;
  members: string[];
  time: Date;
  name: string;
  size: number;
  type: string;
  logo: string;
}

const files = Array.from(Array(100), () => ({
  id: faker.string.uuid(),
  members: [faker.image.avatar(), faker.image.avatar(), faker.image.avatar()],
  time: faker.date.recent(),
  name: faker.system.commonFileName(),
  size: faker.helpers.rangeToNumber({ min: 1024, max: 10 * 1024 * 1024 }),
  type: faker.system.commonFileExt(),
  logo: faker.helpers.arrayElement([
    'https://cdn-icons-png.flaticon.com/128/716/716784.png',
    'https://cdn-icons-png.flaticon.com/128/4725/4725970.png',
    'https://cdn-icons-png.flaticon.com/128/4726/4726010.png',
    'https://cdn-icons-png.flaticon.com/128/4726/4726040.png'
  ])
}));

const File = () => {
  const appContext = useAppContext();

  const columns: ProColumns<IListFile>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
        <Space style={{ cursor: 'pointer' }}>
          <Avatar shape="square" src={record.logo}></Avatar>
          <Typography.Text>{record.name}</Typography.Text>
        </Space>
      )
    },
    {
      title: 'Last Edit',
      dataIndex: 'time',
      valueType: 'dateTime',
      responsive: ['lg']
    },
    {
      title: 'Size',
      dataIndex: 'size',
      render: (_, record) => sizeMemory(record.size),
      responsive: ['lg']
    },
    {
      title: 'Members',
      dataIndex: 'time',
      valueType: 'dateTime',
      render: (_, record) => (
        <Avatar.Group>
          {record.members.map((a, index) => {
            return <Avatar size="small" src={a} key={index} />;
          })}
        </Avatar.Group>
      )
    },
    {
      title: '',
      render: () => [
        <Dropdown
          key="action"
          menu={{
            items: [
              {
                key: 'Download',
                icon: <DownloadOutlined />,
                label: 'Download'
              },
              {
                key: 'Rename',
                icon: <EditOutlined />,
                label: 'Rename'
              },
              {
                key: 'Share',
                icon: <ShareAltOutlined />,
                label: 'Share'
              },
              {
                type: 'divider'
              },
              {
                key: 'Delete',
                icon: <DeleteOutlined />,
                label: 'Delete',
                danger: true
              }
            ]
          }}
        >
          <a>
            <EllipsisOutlined />
          </a>
        </Dropdown>
      ]
    }
  ];

  return (
    <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
      {document.body.clientWidth > 767 && <Sidebar />}
      <Col xs={24} sm={24} md={14} lg={15} xl={16}>
        <ProCard className="h-full">
          <Space
            direction="vertical"
            size={appContext.mobile ? 'middle' : 'large'}
          >
            <Title level={4} style={{ margin: 0 }}>
              Recent
            </Title>
            <div className="card-scroll">
              <Space size="middle">
                {files.slice(95).map((item) => {
                  return (
                    <Card key={item.id} hoverable>
                      <Card.Meta
                        avatar={<Avatar shape="square" src={item.logo} />}
                        title={item.name}
                        description={dateToFromNow(item.time)}
                      />
                    </Card>
                  );
                })}
              </Space>
            </div>
            <Upload key="upload" listType="picture" name="file" multiple={true}>
              <Button type="primary" icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
            <ProTable<IListFile>
              className="table-card"
              dataSource={files}
              rowKey="id"
              columns={columns}
              search={false}
              scroll={{
                x: 'auto'
              }}
              toolbar={{
                settings: [],
                search: {
                  placeholder: 'Search name',
                  allowClear: true,
                  onSearch: () => {}
                }
              }}
              toolBarRender={() => {
                return [
                  <Button key="add-new" icon={<PlusOutlined />}>
                    New Folder
                  </Button>
                ];
              }}
            />
          </Space>
        </ProCard>
      </Col>
    </Row>
  );
};

export default File;
