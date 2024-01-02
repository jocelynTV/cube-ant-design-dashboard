import React from 'react';
import { List, Switch, Typography } from 'antd';

const data = [
  { title: 'Billing Updates' },
  { title: 'New Team Members' },
  { title: 'Completed Projects' },
  { title: 'Newsletters' },
  { title: 'Receive a notification for every successful payment' },
  { title: 'Receive a notification for every initiated payout' },
  { title: 'Receive a notification each time you collect a fee from sales' }
];

const SettingNotification = () => {
  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ borderBlockEnd: 'none' }}>
          <Typography.Text>{item.title}</Typography.Text>
          <Switch defaultChecked />
        </List.Item>
      )}
    />
  );
};

export default SettingNotification;
