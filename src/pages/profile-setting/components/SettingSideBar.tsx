import React from 'react';
import { List } from 'antd';
import {
  AppstoreOutlined,
  LockOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProCard } from '@ant-design/pro-components';
import { APP_MAIN_COLOR } from 'config/app';

const data = [
  {
    title: 'Basic Info',
    link: '/setting/basic',
    icon: <AppstoreOutlined />
  },
  {
    title: 'Change Password',
    link: '/setting/password',
    icon: <LockOutlined />
  },
  {
    title: 'Notifications',
    link: '/setting/notification',
    icon: <NotificationOutlined />
  }
];

const SettingSideBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const styleActive = {
    backgroundColor: APP_MAIN_COLOR,
    margin: '0 -12px',
    padding: '6px 12px',
    borderRadius: 6,
    color: '#fff'
  };

  return (
    <ProCard className="h-full">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            onClick={() => navigate(item.link)}
            key={item.link}
            style={{
              borderBlockEnd: 'none',
              cursor: 'pointer',
              ...(pathname === item.link ? styleActive : {})
            }}
          >
            <List.Item.Meta
              avatar={item.icon}
              title={
                <span
                  style={{
                    ...(pathname === item.link ? { color: '#fff' } : {})
                  }}
                >
                  {item.title}
                </span>
              }
            />
          </List.Item>
        )}
      />
    </ProCard>
  );
};

export default SettingSideBar;
