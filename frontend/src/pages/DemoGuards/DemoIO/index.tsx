import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Row, Col, Spin, Input, Collapse } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import ModelSelection from '../../../components/DropdownInput/ModelSelection';
import { APIPostDemoPrivacy, APIPostDemoBias, APIPostDemoHarmfulOutput } from '../../../services/attack';
import { PromptSelection } from '../../../components/DropdownInput/PromptSelections';

const { Panel } = Collapse;

const defaultModel = "GPT35"

interface Props {
  mode: DemoIOMode
}

export enum DemoIOMode {
  HarmfulOutput,
  Privacy,
  Bias
}

function AttackPrompt(text: string) {
  return <Collapse>
    <Panel header="See the attack prompt" key="1">
      {text}
    </Panel>  
  </Collapse>
}

function DemoIO( { mode } : Props) {

  const [form] = Form.useForm();
  const [modifiedPrompt, setModifiedPrompt] = useState('');
  const [responseWithoutGuard, setResponseWithoutGuard] = useState('');
  const [responseWithGuard, setResponseWithGuard] = useState('');
  const [currModel, setCurrModel] = useState(defaultModel);
  const [currPrompt, setCurrPrompt] = useState("");

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setModifiedPrompt("");
    setResponseWithoutGuard("");
    setResponseWithGuard("");
  }, [mode]);

  const handleSubmit = async (value: any) => {
    // Simulate modifying the prompt
    setLoading(true);
    setModifiedPrompt("");
    setResponseWithoutGuard("");
    setResponseWithGuard("");

    let result;
    try {
      switch (mode) {
        case DemoIOMode.Bias:
          result = await APIPostDemoBias(currPrompt, currModel, value['attribute']);
          break;
        case DemoIOMode.Privacy:
          result = await APIPostDemoPrivacy(currPrompt, currModel);
          break;
        case DemoIOMode.HarmfulOutput:
          result = await APIPostDemoHarmfulOutput(currPrompt, currModel);
          break;
        default:
          result = null
          break;
    }} catch (error) {
            console.error(error)
            alert(`Failed to run. Error ${JSON.stringify(error)}`)
    }
    setLoading(false)
    if (!result) return;

    const {attack_prompt, response, defense_response} = result.data;
    setModifiedPrompt(attack_prompt);
    setResponseWithoutGuard(response);
    setResponseWithGuard(defense_response);
  };

  return (
  <div>

    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Model" name="llm_name">
        <ModelSelection onSelect={setCurrModel} />
      </Form.Item>
      {/* Do not use prompt here */}
      {/* <Form.Item name="prompt" rules={[{ required: true, message: 'Please input your prompt!' }]} label="Prompt">
        <TextArea placeholder="Your prompt" />
      </Form.Item> */}

      {mode === DemoIOMode.Bias ? 
        <Form.Item label="Attribute To Attack" name="attribute">
          <Input />
        </Form.Item>:<></>
      }

      <Form.Item label="Question Prompt">
        <PromptSelection demoMode={mode} onSelect={setCurrPrompt} placeholder="Input your question to the model..."/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        { loading ? <Spin size="large" /> : <></>}
      </Form.Item>

    </Form>
    
    {/* Display modified output if this is an jailbreak attack to get harmful outputs */}
    {mode === DemoIOMode.HarmfulOutput ? 
      <Card>
        <strong>Attacker modified prompt to the following:</strong>
        {AttackPrompt(modifiedPrompt)}
      </Card> : <></>
    }
   
    {/* Display private data file if this is a privacy attack */}
    {mode === DemoIOMode.Privacy ? 
      <>
        <strong>Model has access to <a href={`${process.env.PUBLIC_URL}/private-data-demo.xlsx`}> this file</a>. Try querying for private information!</strong>
        {AttackPrompt(modifiedPrompt)}
      </> : <></>
    }

    <Card>
      <Row gutter={16} justify='center'>
      </Row>
      <Row>
        <Col span={12}>
           <strong style={{'color': 'red'}}><CloseOutlined /></strong> 
           <br></br>
           <strong style={{'color': 'red'}}> Original output under attack (Jailbreak): </strong>
          
          <p>{responseWithoutGuard}</p>
        </Col>
        <Col span={12}>

           <strong style={{'color': 'green'}}><CheckOutlined /></strong> 
           <br></br>
           <strong style={{'color': 'green'}}> Defended output: </strong>

          <p>{responseWithGuard}</p>
        </Col>
      </Row>
    </Card>
  </div>
);
}

export default DemoIO;