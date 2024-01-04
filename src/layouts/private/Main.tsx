import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  LoginOutlined,
  LayoutOutlined
} from '@ant-design/icons';
import {
  DefaultFooter,
  PageContainer,
  ProLayout
} from '@ant-design/pro-components';
import { Avatar, Dropdown, Input, Modal, Space, Typography, theme } from 'antd';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

import { APP_LOGO, APP_TEXT, APP_COPYRIGHT, APP_VERSION } from 'config/app';
import { useAppContext } from 'context/AppContext';
import { userInfoApi } from 'features/user/api';
import { protectRoute, publicRoute } from 'config/route';
import { signOutApi } from 'features/authentication/api';

const { Paragraph, Text } = Typography;

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 20,
          backgroundColor: token.colorBgTextHover
        }}
        prefix={<SearchOutlined />}
        placeholder="Search here..."
        bordered={false}
      />
    </div>
  );
};

const Main = () => {
  if (typeof document === 'undefined') {
    return <div />;
  }
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [pathname, setPathname] = useState(location.pathname);

  const appContext = useAppContext();

  const { mutate } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      window.location.href = publicRoute.signin;
    }
  });

  const { data, isLoading } = useQuery({
    queryKey: ['userInfoApi'],
    queryFn: userInfoApi
  });

  useEffect(() => {
    if (data) {
      appContext.setUserInfo(data);
    }
  }, [data]);

  const confirm = () => {
    Modal.confirm({
      title: 'Logout',
      content: 'Are you want logout?',
      centered: true,
      okType: 'danger',
      onOk: () => {
        return new Promise((resolve) => {
          setTimeout(resolve, 500);
        }).then(() => {
          mutate();
        });
      }
    });
  };

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <ProLayout
        loading={isLoading}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px'
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px'
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px'
          }
        ]}
        route={{
          routes: [
            {
              name: t('menu.dashboard'),
              path: `/${protectRoute.dashboard}`,
              icon: <DashboardOutlined />
            },
            {
              name: 'Apps',
              path: '/apps',
              icon: <AppstoreOutlined />,
              routes: [
                {
                  path: `/${protectRoute.billing}`,
                  name: t('menu.billing')
                },
                {
                  path: `/${protectRoute.files}`,
                  name: t('menu.filemanager')
                }
              ]
            },
            {
              name: 'Pages',
              path: '/pages',
              icon: <LayoutOutlined />,
              routes: [
                {
                  path: `/${protectRoute.products}`,
                  name: t('menu.products')
                },
                {
                  path: `/${protectRoute.users}`,
                  name: t('menu.users')
                },
                {
                  path: `/${protectRoute.form}`,
                  name: 'Form'
                }
              ]
            },
            {
              name: 'Account',
              path: '/account',
              icon: <UserOutlined />,
              routes: [
                {
                  path: `/${protectRoute.profile}`,
                  name: t('menu.profile')
                },
                {
                  path: `/${protectRoute.setting.basic}`,
                  name: t('menu.setting')
                }
              ]
            },
            {
              name: 'Authentication',
              path: '/authentication',
              icon: <LoginOutlined />,
              routes: [
                {
                  path: publicRoute.signin,
                  name: t('menu.signin')
                },
                {
                  path: `/${publicRoute.signup}`,
                  name: t('menu.signup')
                },
                {
                  path: `/${publicRoute.forgotpassword}`,
                  name: t('menu.forgotpassword')
                },
                {
                  path: `/${publicRoute.recoverpassword}?token=demo`,
                  name: t('menu.recoverpassword')
                },
                {
                  path: `/${publicRoute.verifyaccount}?token=demo`,
                  name: t('menu.verifyaccount')
                },
                {
                  path: `/${publicRoute.notificationpassword}`,
                  name: t('menu.notification')
                }
              ]
            }
          ]
        }}
        location={{
          pathname
        }}
        appList={[
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            title: 'Ant Design',
            desc: '杭州市较知名的 UI 设计语言',
            url: 'https://ant.design'
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
            title: 'AntV',
            desc: '蚂蚁集团全新一代数据可视化解决方案',
            url: 'https://antv.vision/',
            target: '_blank'
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            title: 'Pro Components',
            desc: '专业级 UI 组件库',
            url: 'https://procomponents.ant.design/'
          },
          {
            icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
            title: 'umi',
            desc: '插件化的企业级前端应用框架。',
            url: 'https://umijs.org/zh-CN/docs'
          },

          {
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
            title: 'qiankun',
            desc: '可能是你见过最完善的微前端解决方案🧐',
            url: 'https://qiankun.umijs.org/'
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '语雀',
            desc: '知识创作与分享工具',
            url: 'https://www.yuque.com/'
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
            title: 'Kitchen ',
            desc: 'Sketch 工具集',
            url: 'https://kitchen.alipay.com/'
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
            title: 'dumi',
            desc: '为组件开发场景而生的文档工具',
            url: 'https://d.umijs.org/zh-CN'
          }
        ]}
        avatarProps={{
          src: appContext.userInfo?.avatar,
          size: 'small',
          title: appContext.userInfo?.name,
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'profile',
                      icon: <UserOutlined />,
                      label: <Link to="/profile">Profile</Link>
                    },
                    {
                      type: 'divider'
                    },
                    {
                      onClick: confirm,
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: 'Logout',
                      danger: true
                    }
                  ]
                }}
              >
                {dom}
              </Dropdown>
            );
          }
        }}
        actionsRender={() => {
          return [
            document.body.clientWidth > 1200 ? <SearchInput /> : undefined,
            <Avatar
              size="large"
              onClick={() =>
                appContext.changeMode(
                  appContext.mode === 'light' ? 'dark' : 'light'
                )
              }
              key="mode"
              src={
                appContext.mode === 'light'
                  ? 'https://cdn-icons-png.flaticon.com/64/4735/4735030.png'
                  : 'https://cdn-icons-png.flaticon.com/64/4735/4735038.png'
              }
            />,
            <Dropdown
              key="lanaguage"
              menu={{
                items: [
                  {
                    key: 'vi',
                    label: (
                      <Space>
                        <Avatar
                          shape="square"
                          size="small"
                          src="https://cdn-icons-png.flaticon.com/64/555/555515.png"
                        />
                        <Text>VI</Text>
                      </Space>
                    )
                  },
                  {
                    key: 'en',
                    label: (
                      <Space>
                        <Avatar
                          shape="square"
                          size="small"
                          src="https://cdn-icons-png.flaticon.com/64/555/555526.png"
                        />
                        <Text>EN</Text>
                      </Space>
                    )
                  }
                ],
                onClick: (info) => {
                  i18n.changeLanguage(info.key);
                }
              }}
            >
              <Avatar
                shape="square"
                size="large"
                src={
                  i18n.language === 'vi'
                    ? 'https://cdn-icons-png.flaticon.com/64/555/555515.png'
                    : 'https://cdn-icons-png.flaticon.com/64/555/555526.png'
                }
              />
            </Dropdown>
          ];
        }}
        // pageTitleRender={() => ''}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a>
              {logo}
              {title}
            </a>
          );
          if (typeof window === 'undefined') return defaultDom;
          if (document.body.clientWidth < 1400) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return <>{defaultDom}</>;
        }}
        footerRender={() => (
          <DefaultFooter
            links={[
              {
                key: 'github',
                title: 'Github',
                href: '',
                blankTarget: true
              }
            ]}
            copyright={APP_COPYRIGHT}
          />
        )}
        menuFooterRender={(props) => {
          // eslint-disable-next-line react/prop-types
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12
              }}
            >
              <Paragraph className="mb-0">{APP_VERSION}</Paragraph>
            </div>
          );
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '');
              navigate(item.path as string);
            }}
          >
            {dom}
          </div>
        )}
        breakpoint="xl"
        title={APP_TEXT}
        logo={APP_LOGO}
        fixSiderbar={true}
        fixedHeader={true}
        layout="mix"
        splitMenus={false}
        siderMenuType="sub"
      >
        <PageContainer
          ghost
          token={{
            paddingInlinePageContainerContent: appContext.mobile ? 12 : 24
          }}
        >
          <Outlet />
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default Main;
