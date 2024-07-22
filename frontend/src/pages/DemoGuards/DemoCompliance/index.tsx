import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'antd';
import ModelSelection from '../../../components/DropdownInput/ModelSelection';
import TextArea from 'antd/es/input/TextArea';

const defaultModel = "GPT35"

function DemoCompliance() {

  const [form] = Form.useForm();
  const [currModel, setCurrModel] = useState(defaultModel);

  const handleSubmit = () => {
    // Simulate modifying the prompt
    // TODO: handle submit here
    
  };

  return (
  <div>

    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Model">
        <ModelSelection onSelect={setCurrModel} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Run 
        </Button>
      </Form.Item>
    </Form>
    
    <Card>
    </Card>
  </div>
);
}

export default DemoCompliance;