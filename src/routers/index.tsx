import React from 'react';
import PublicLayout from 'layouts/public/Main';
import PrivateMain from 'layouts/private/Main';
import Error from 'components/Error';
import {
  SignIn,
  SignUp,
  Dashboard,
  Products,
  Billing,
  Users,
  Profile,
  ForgotPassword,
  NotificationPassword,
  RecoverPassword,
  ProfileSetting,
  SettingBasicInfo,
  SettingChangePassword,
  SettingNotification,
  Form,
  VerifyAccount,
  Files
} from 'pages';
import { protectRoute, publicRoute } from 'config/route';

export default [
  {
    element: <PrivateMain />,
    errorElement: <Error />,
    children: [
      {
        path: protectRoute.dashboard,
        element: <Dashboard />
      },
      {
        path: protectRoute.products,
        element: <Products />
      },
      {
        path: protectRoute.users,
        element: <Users />
      },
      {
        path: protectRoute.profile,
        element: <Profile />
      },
      {
        path: protectRoute.form,
        element: <Form />
      },
      {
        path: protectRoute.files,
        element: <Files />
      },
      {
        path: protectRoute.billing,
        element: <Billing />
      },
      {
        element: <ProfileSetting />,
        children: [
          {
            path: protectRoute.setting.basic,
            element: <SettingBasicInfo />
          },
          {
            path: protectRoute.setting.password,
            element: <SettingChangePassword />
          },
          {
            path: protectRoute.setting.notification,
            element: <SettingNotification />
          }
        ]
      }
    ]
  },
  {
    element: <PublicLayout />,
    errorElement: <Error />,
    children: [
      {
        path: publicRoute.signin,
        element: <SignIn />
      },
      {
        path: publicRoute.signup,
        element: <SignUp />
      },
      {
        path: publicRoute.forgotpassword,
        element: <ForgotPassword />
      },
      {
        path: publicRoute.notificationpassword,
        element: <NotificationPassword />
      },
      {
        path: publicRoute.verifyaccount,
        element: <VerifyAccount />
      },
      {
        path: publicRoute.recoverpassword,
        element: <RecoverPassword />
      }
    ]
  }
];
