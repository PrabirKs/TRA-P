import React from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
} from "antd";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
const JobAddForm = () => (
  <Form
    className="flex flex-col w-full"
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    initialValues={{
      "input-number": 3,
      "checkbox-group": ["A", "B"],
      rate: 3.5,
      "color-picker": null,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      {...formItemLayout}
      name="jobName"
      label="Task Name"
      rules={[
        {
          required: true,
          message: "Please write Task Name",
        },
      ]}
    >
      <Input placeholder="Please write Task Name" />
    </Form.Item>

    <div className="file-upload-container overflow-y-auto">
      <Form.Item label="Dragger">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </div>

    <Form.Item
      name="select"
      label="Select"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please select your country!",
        },
      ]}
    >
      <Select placeholder="Please select a country">
        <Option value="china">China</Option>
        <Option value="usa">U.S.A</Option>
      </Select>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
  </Form>
);
export default JobAddForm;
