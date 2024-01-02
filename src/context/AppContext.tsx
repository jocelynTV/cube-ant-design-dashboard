/* eslint-disable no-unused-vars */
import React, { useContext, createContext, useState } from 'react';
import { UserInfo } from 'features/user/type';

type Mode = 'dark' | 'light';

interface AppContextType {
  userInfo: UserInfo | null;
  mobile: boolean;
  setUserInfo: (value: UserInfo) => void;
  mode: Mode;
  changeMode: (value: Mode) => void;
}

const themes = (localStorage.getItem('themes') as Mode) || 'light';

const isMobile = document.body.clientWidth > 575 ? false : true;

export const AppContext = createContext<AppContextType>({
  userInfo: null,
  mobile: isMobile,
  mode: themes,
  setUserInfo: () => null,
  changeMode: () => null
});

interface Props {
  children: JSX.Element;
}

const user = null;

export const AppContextProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<Mode>(themes);
  const [userInfo, setUserInfoState] = useState<UserInfo | null>(user);
  const [mobile] = useState<boolean>(isMobile);

  const changeMode = (value: Mode) => {
    localStorage.setItem('themes', value);
    setMode(value);
  };

  const setUserInfo = (value: UserInfo) => {
    setUserInfoState(value);
  };

  const value: AppContextType = {
    userInfo,
    mobile,
    setUserInfo,
    mode: mode,
    changeMode
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
