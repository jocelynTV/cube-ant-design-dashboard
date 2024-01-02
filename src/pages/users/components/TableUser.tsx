import React, { useEffect, useState } from 'react';
import { ProColumns, TableDropdown } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Avatar, Button, Space, Typography } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

import { buttonAction } from 'config/text';
import { userListApi } from 'features/user/api';
import { UserInfo } from 'features/user/type';

interface Props {
  // eslint-disable-next-line no-unused-vars
  setUser: (user: UserInfo) => void;
  showDrawerInfo: () => void;
  showModalAddUser: () => void;
  showModalEditUser: () => void;
}

const TableUser: React.FC<Props> = ({
  setUser,
  showDrawerInfo,
  showModalAddUser,
  showModalEditUser
}) => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['userListApi'],
    queryFn: userListApi
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const handleSearch = (value: string) => {
    if (data) {
      const filteredResults = data.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase())
      );
      setUsers(filteredResults);
    }
  };

  const columns: ProColumns<UserInfo>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
        <Space wrap>
          <Avatar src={record.avatar}></Avatar>
          <Typography.Text>{record.name}</Typography.Text>
        </Space>
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      responsive: ['md']
    },
    {
      title: 'Active',
      dataIndex: 'status',
      responsive: ['sm'],
      filters: true,
      onFilter: true,
      valueType: 'select',
      valueEnum: {
        OPEN: { text: 'OPEN', status: 'Default' },
        PENDING: { text: 'PENDING', status: 'Warning' },
        PROCESSING: { text: 'PROCESSING', status: 'Processing' },
        SUCCESS: { text: 'SUCCESS', status: 'Success' }
      }
    },
    {
      title: 'Joined',
      dataIndex: 'time',
      valueType: 'dateTime',
      responsive: ['lg']
    },
    {
      title: '',
      render: (_, record) => [
        <TableDropdown
          key="actionGroup"
          onSelect={(key) => {
            setUser(record);
            if (key === 'info') {
              showDrawerInfo();
            } else if (key === 'edit') {
              showModalEditUser();
            }
          }}
          menus={[
            {
              key: 'info',
              name: (
                <Space>
                  <EyeOutlined />
                  {buttonAction.view}
                </Space>
              )
            },
            {
              key: 'edit',
              name: (
                <Space>
                  <EditOutlined />
                  {buttonAction.edit}
                </Space>
              )
            }
          ]}
        />
      ]
    }
  ];

  return (
    <ProTable<UserInfo>
      loading={isLoading}
      dataSource={users}
      rowKey="id"
      columns={columns}
      search={false}
      scroll={{
        x: 'auto'
      }}
      toolbar={{
        settings: [],
        search: {
          placeholder: 'Search by email or name',
          style: { width: 250 },
          allowClear: true,
          onSearch: (value: string) => {
            handleSearch(value);
          }
        }
      }}
      toolBarRender={() => {
        return [
          <Button
            key="add-new"
            type="primary"
            onClick={showModalAddUser}
            icon={<PlusOutlined />}
          >
            {buttonAction.create}
          </Button>
        ];
      }}
    />
  );
};

export default TableUser;
