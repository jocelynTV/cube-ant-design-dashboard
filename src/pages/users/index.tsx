import React, { useState } from 'react';

import DrawerInfo from './components/DrawerInfo';
import ModalAddUser from './components/ModalAddUser';
import ModalEditUser from './components/ModalEditUser';
import { UserInfo } from 'features/user/type';
import TableUser from './components/TableUser';

const Users = () => {
  const [openDrawerInfo, setOpenDrawerInfo] = useState<boolean>(false);
  const [openAddUser, setOpenAddUser] = useState<boolean>(false);
  const [openEditUser, setOpenEditUser] = useState<boolean>(false);

  const [user, setUser] = useState<UserInfo | null>(null);

  const onSetUser = (user: UserInfo) => {
    setUser(user);
  };

  const showDrawerInfo = () => {
    setOpenDrawerInfo(!openDrawerInfo);
  };

  const showModalAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const showModalEditUser = () => {
    setOpenEditUser(!openEditUser);
  };

  return (
    <>
      <TableUser
        setUser={onSetUser}
        showDrawerInfo={showDrawerInfo}
        showModalAddUser={showModalAddUser}
        showModalEditUser={showModalEditUser}
      />
      <DrawerInfo user={user} open={openDrawerInfo} onClose={showDrawerInfo} />
      <ModalAddUser open={openAddUser} onClose={showModalAddUser} />
      <ModalEditUser
        user={user}
        open={openEditUser}
        onClose={showModalEditUser}
      />
    </>
  );
};

export default Users;
