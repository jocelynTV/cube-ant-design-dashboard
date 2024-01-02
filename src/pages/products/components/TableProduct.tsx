import React, { useEffect, useState } from 'react';
import { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Avatar, Button, Space, Typography, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { buttonAction } from 'config/text';

import { useQuery } from '@tanstack/react-query';

import { Product, ProductQuery } from 'features/product/type';
import { productListApi } from 'features/product/api';
import { userListApi } from 'features/user/api';

const { RangePicker } = DatePicker;

const rangePresets: {
  label: string;
  value: [Dayjs, Dayjs];
}[] = [
  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] }
];

const TableProduct = () => {
  const navigate = useNavigate();

  const [department, setDepartment] = useState({});
  const [query, setQuery] = useState<ProductQuery>({
    page: 1,
    pageSize: 20
  });

  const { data, isLoading } = useQuery({
    queryKey: ['productListApi', query],
    queryFn: () => productListApi(query)
  });

  const { data: users } = useQuery({
    queryKey: ['userListApi'],
    queryFn: userListApi
  });

  useEffect(() => {
    if (users?.length) {
      const resultObject: Record<string, string> = users.reduce(
        (acc, item) => {
          acc[item.id] = item.name;
          return acc;
        },
        {} as Record<string, string>
      );
      setDepartment(resultObject);
    }
  }, [users]);

  const columns: ProColumns<Product>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      responsive: ['lg']
    },
    {
      title: 'ID',
      tooltip: 'ISBN identifier',
      dataIndex: 'id',
      copyable: true,
      responsive: ['lg']
    },
    {
      title: 'Name',
      dataIndex: 'name',
      search: false,
      render: (_, record) => (
        <Space>
          <Avatar shape="square" src={record.image}></Avatar>
          <div>
            <Typography.Paragraph style={{ margin: 0 }}>
              {record.name}
            </Typography.Paragraph>
            <Typography.Text type="secondary">${record.price}</Typography.Text>
          </div>
        </Space>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        OPEN: { text: 'OPEN', status: 'Default' },
        PENDING: { text: 'PENDING', status: 'Warning' },
        PROCESSING: { text: 'PROCESSING', status: 'Processing' },
        SUCCESS: { text: 'SUCCESS', status: 'Success' },
        FAILED: { text: 'FAILED', status: 'Error' }
      }
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      valueType: 'select',
      responsive: ['md'],
      valueEnum: department
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      hideInSearch: true,
      responsive: ['sm']
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      hideInTable: true,
      renderFormItem: () => {
        return <RangePicker presets={rangePresets} />;
      },
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1]
          };
        }
      }
    }
  ];

  return (
    <ProTable<Product>
      loading={isLoading}
      dataSource={data}
      rowKey="id"
      columns={columns}
      scroll={{
        x: 'auto'
      }}
      onSubmit={(values) => {
        setQuery({ ...values, page: 1, pageSize: query.pageSize });
      }}
      pagination={{
        current: query.page,
        pageSize: query.pageSize,
        onChange(page, pageSize) {
          setQuery({ ...query, page, pageSize });
        }
      }}
      search={{
        layout: 'vertical'
      }}
      toolbar={{ settings: [] }}
      toolBarRender={() => {
        return [
          <Button
            onClick={() => navigate('/form')}
            key="add-new"
            type="primary"
            icon={<PlusOutlined />}
          >
            {buttonAction.create}
          </Button>
        ];
      }}
    />
  );
};

export default TableProduct;
