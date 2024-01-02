import React, { useEffect } from 'react';
import { Form, Input, Modal, message } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { buttonSave, textAction } from 'config/text';
import { UserAddNewInput, UserInfo } from 'features/user/type';
import { userDeleteApi } from 'features/user/api';

interface Props {
  onClose: () => void;
  open: boolean;
  user: UserInfo | null;
}

const ModalDeleteUser: React.FC<Props> = ({ user, open, onClose }) => {
  const [formDelete] = Form.useForm();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: userDeleteApi,
    onSuccess: async () => {
      message.success(textAction.detele);
      await queryClient.invalidateQueries({ queryKey: ['userListApi'] });
      onClose();
    }
  });

  useEffect(() => {
    formDelete.setFieldValue('id', user?.id);
    formDelete.setFieldValue('email', '');
  }, [user]);

  const onFinishForm = (values: UserAddNewInput) => {
    mutate(values);
  };

  return (
    <Modal
      width="auto"
      style={{ minWidth: 360 }}
      centered
      open={open}
      okType="danger"
      title="Delete User"
      confirmLoading={isPending}
      okText={buttonSave.detele}
      cancelText={buttonSave.cancel}
      onCancel={() => onClose()}
      onOk={() => {
        formDelete
          .validateFields()
          .then((values) => {
            onFinishForm(values);
          })
          .catch(() => {});
      }}
    >
      <Form form={formDelete} layout="vertical">
        <Form.Item hidden name="id" label="ID" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true }, { type: 'email' }]}
        >
          <Input placeholder="Enter email to delete" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalDeleteUser;
