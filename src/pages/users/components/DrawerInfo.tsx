import React, { useState } from 'react';
import { Avatar, Button, Drawer, Space, Typography } from 'antd';
import { ProDescriptions } from '@ant-design/pro-components';
import { DeleteOutlined } from '@ant-design/icons';
import ModalDeleteUser from './ModalDeleteUser';

import { UserInfo } from 'features/user/type';

interface Props {
  onClose: () => void;
  open: boolean;
  user: UserInfo | null;
}

const DrawerInfo: React.FC<Props> = ({ open, onClose, user }) => {
  const [openDeleteUser, setOpenDeleteUser] = useState<boolean>(false);

  const showModalDeleteUser = () => {
    setOpenDeleteUser(!openDeleteUser);
  };

  return (
    <Drawer
      title={
        <Space>
          <Avatar src={user?.avatar} />
          <Typography.Text>{user?.name}</Typography.Text>
        </Space>
      }
      placement="right"
      onClose={() => onClose()}
      open={open}
    >
      <ProDescriptions dataSource={user as UserInfo}>
        <ProDescriptions.Item copyable dataIndex="id" label="ID" span={3} />
        <ProDescriptions.Item dataIndex="email" label="Email" span={3} />
        <ProDescriptions.Item dataIndex="phone" label="Phone" span={3} />
        <ProDescriptions.Item dataIndex="location" label="Location" span={3} />
        <ProDescriptions.Item dataIndex="bio" label="Bio" span={3} />
        <ProDescriptions.Item dataIndex="gender" label="Sex" span={3} />
        <ProDescriptions.Item
          dataIndex="jobDescriptor"
          label="jobDescriptor"
          span={3}
        />
        <ProDescriptions.Item dataIndex="jobTitle" label="jobTitle" span={3} />
        <ProDescriptions.Item
          dataIndex="time"
          label="Joined"
          valueType="dateTime"
          span={3}
        />
        <ProDescriptions.Item
          dataIndex="status"
          label="Status"
          valueEnum={{
            OPEN: { text: 'OPEN', status: 'Default' },
            PENDING: { text: 'PENDING', status: 'Warning' },
            PROCESSING: { text: 'PROCESSING', status: 'Processing' },
            SUCCESS: { text: 'SUCCESS', status: 'Success' }
          }}
          span={3}
        />
      </ProDescriptions>
      <Button
        onClick={showModalDeleteUser}
        type="primary"
        danger
        icon={<DeleteOutlined />}
      >
        Delete permanently this user
      </Button>
      <ModalDeleteUser
        user={user}
        open={openDeleteUser}
        onClose={showModalDeleteUser}
      />
    </Drawer>
  );
};

export default DrawerInfo;
