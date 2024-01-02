import React, { useEffect } from 'react';
import { Form, Input, Modal, message } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { buttonSave, textAction } from 'config/text';
import { userAddNewApi } from 'features/user/api';
import { UserAddNewInput } from 'features/user/type';

interface Props {
  onClose: () => void;
  open: boolean;
}

const ModalAddUser: React.FC<Props> = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: userAddNewApi,
    onSuccess: async () => {
      message.success(textAction.create);
      await queryClient.invalidateQueries({ queryKey: ['userListApi'] });
      onClose();
    }
  });

  useEffect(() => {
    form.resetFields();
  }, [open]);

  const onFinishForm = (values: UserAddNewInput) => {
    mutate(values);
  };

  return (
    <Modal
      width="auto"
      style={{ minWidth: 360 }}
      centered
      open={open}
      title="Add New User"
      confirmLoading={isPending}
      okText={buttonSave.create}
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

export default ModalAddUser;
