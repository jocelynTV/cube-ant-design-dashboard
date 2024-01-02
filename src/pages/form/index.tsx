import React from 'react';
import {
  Row,
  Col,
  Space,
  Form,
  Input,
  Select,
  Upload,
  Button,
  DatePicker,
  Flex,
  InputNumber,
  message
} from 'antd';
import { ProCard } from '@ant-design/pro-components';
import { UploadOutlined } from '@ant-design/icons';
import { faker } from '@faker-js/faker';
import { buttonSave } from 'config/text';
import { useAppContext } from 'context/AppContext';

const { Dragger } = Upload;

const options = [
  {
    value: 'OPEN',
    label: 'OPEN'
  },
  {
    value: 'PENDING',
    label: 'PENDING'
  },
  {
    value: 'PROCESSING',
    label: 'PROCESSING'
  },
  {
    value: 'SUCCESS',
    label: 'SUCCESS'
  },
  {
    value: 'FAILED',
    label: 'FAILED'
  }
];

interface Option {
  label: string;
  value: string;
}

const department = Array.from(Array(10), () => ({
  value: faker.commerce.department(),
  label: faker.commerce.department()
}));

const filterOption = (input: string, option?: Option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const FormPages = () => {
  const [form] = Form.useForm();
  const appContext = useAppContext();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={(values) => message.info(JSON.stringify(values))}
    >
      <Space direction="vertical" size={appContext.mobile ? 'middle' : 'large'}>
        <Flex justify="flex-end" align="center">
          <Form.Item className="mb-0">
            <Space size="middle">
              <Button type="primary" htmlType="submit">
                {buttonSave.create}
              </Button>
              <Button htmlType="button" onClick={() => form.resetFields()}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Flex>
        <Row gutter={appContext.mobile ? [12, 12] : [24, 24]}>
          <Col xs={24} md={14}>
            <ProCard className="h-full">
              <Form.Item
                name="ID"
                label="ID"
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="Name"
                label="Product Name"
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="Price"
                label="Price"
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                />
              </Form.Item>
              <Form.Item label="Description" name="Description">
                <Input.TextArea rows={5} maxLength={200} />
              </Form.Item>
              <Form.Item label="Image" valuePropName="fileList">
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              </Form.Item>
            </ProCard>
          </Col>
          <Col xs={24} md={10}>
            <ProCard className="h-full">
              <Form.Item
                name="Department"
                label="Department"
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <Select
                  showSearch
                  filterOption={filterOption}
                  options={department}
                />
              </Form.Item>
              <Form.Item
                name="Status"
                label="Status"
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <Select options={options} />
              </Form.Item>
              <Form.Item label="Publish">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </ProCard>
          </Col>
        </Row>
      </Space>
    </Form>
  );
};

export default FormPages;
