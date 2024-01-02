import React from 'react';
import { Outlet } from 'react-router-dom';
import { Image, Layout, Typography } from 'antd';
import { APP_COPYRIGHT, APP_LOGO, APP_TEXT } from 'config/app';

const { Content, Footer } = Layout;

const PublicLayout = () => {
  return (
    <Layout>
      <Content>
        <div className="flex-center">
          <Image width={64} preview={false} src={APP_LOGO} alt={APP_TEXT} />
          <Outlet />
          <Footer>
            <Typography.Paragraph type="secondary">
              {APP_COPYRIGHT}
            </Typography.Paragraph>
          </Footer>
        </div>
      </Content>
    </Layout>
  );
};

export default PublicLayout;
