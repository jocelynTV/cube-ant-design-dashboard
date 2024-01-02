import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Layout, Result } from 'antd';

const ErrorPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  return (
    <Layout>
      <div className="flex-center">
        <Result
          status="success"
          title={error.statusText}
          subTitle={error.data || error.message}
        />
      </div>
    </Layout>
  );
};

export default ErrorPage;
