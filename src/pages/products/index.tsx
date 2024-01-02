import React from 'react';
import { Space } from 'antd';

import DashboardOverview from './components/DashboardOverview';
import { useAppContext } from 'context/AppContext';
import TableProduct from './components/TableProduct';

const Products = () => {
  const appContext = useAppContext();

  return (
    <Space direction="vertical" size={appContext.mobile ? 'middle' : 'large'}>
      <DashboardOverview />
      <TableProduct />
    </Space>
  );
};

export default Products;
