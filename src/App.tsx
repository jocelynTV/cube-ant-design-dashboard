import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import en_US from 'antd/es/locale/en_US';

import routers from 'routers';
import { useAppContext } from 'context/AppContext';
import { APP_MAIN_COLOR } from 'config/app';

import './config/default';

import './assets/styles/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';

const router = createBrowserRouter(routers);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false
    }
  }
});

const App = () => {
  const appContext = useAppContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={en_US}
        theme={{
          algorithm:
            appContext.mode === 'dark'
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
          components: {
            Input: {
              activeShadow: 'none'
            },
            Button: {
              dangerShadow: 'none',
              primaryShadow: 'none'
            }
          },
          token: {
            colorPrimary: APP_MAIN_COLOR,
            colorBgBase: appContext.mode === 'dark' ? '#192132' : undefined,
            fontFamily: 'Open Sans'
          }
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
