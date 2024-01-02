import React from 'react';
import { Button, Typography, Divider } from 'antd';

import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { UserInfo } from 'features/user/type';

interface Props {
  userInfo: UserInfo | null;
}

const Information: React.FC<Props> = ({ userInfo }) => {
  return (
    <ProCard
      title="Profile Information"
      className="h-full"
      extra={<Button type="link">Edit</Button>}
    >
      <Typography.Paragraph>{userInfo?.bio}</Typography.Paragraph>
      <Divider />
      <ProDescriptions dataSource={userInfo as UserInfo}>
        <ProDescriptions.Item dataIndex="email" label="Email" span={3} />
        <ProDescriptions.Item dataIndex="phone" label="Phone" span={3} />
        <ProDescriptions.Item dataIndex="location" label="Location" span={3} />
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
    </ProCard>
  );
};

export default Information;
