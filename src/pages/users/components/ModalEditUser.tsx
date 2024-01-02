import React, { useEffect } from 'react';
import { Form, Input, Modal, message } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { buttonSave, textAction } from 'config/text';
import { UserInfo } from 'features/user/type';
import { userUpdateBasicApi } from 'features/user/api';

interface Props {
  onClose: () => void;
  open: boolean;
  user: UserInfo | null;
}

const ModalEditUser: React.FC<Props> = ({ user, open, onClose }) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: userUpdateBasicApi,
    onSuccess: async () => {
      message.success(textAction.update);
      await queryClient.invalidateQueries({ queryKey: ['userListApi'] });
      onClose();
    }
  });

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user]);

  const onFinishForm = (values: UserInfo) => {
    mutate(values);
  };

  return (
    <Modal
      width="auto"
      style={{ minWidth: 360 }}
      centered
      open={open}
      title="Edit User"
      confirmLoading={isPending}
      okText={buttonSave.update}
      cancelText={buttonSave.cancel}
      onCancel={() => onClose()}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onFinishForm(values);
          })
          .catch(() => {});
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true }, { type: 'email' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditUser;
