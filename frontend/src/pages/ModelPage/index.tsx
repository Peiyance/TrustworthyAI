import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react'

const { Text } = Typography;

type ModelInfo = {
    modelName: string;
    sha: string;
    lastCreated: string;
    lastCalled: string;
    originalEndpoint: string;
    guardedEndpoint: string;
}

const modelList: ModelInfo[] = [
   {
        modelName: "ChatGPT-3.5",
        sha: "3f6df8bf007d0b461a26350c902295c2400bf32b",
        lastCreated: Date.now().toString(),
        lastCalled: Date.now().toString(),
        originalEndpoint: "https://your-company/model/0bf32b",
        guardedEndpoint: "https://guardai.io/guarded/12b4a0"
   },   
   {
        modelName: "ChatGPT-4",
        sha: "d75567bb8d940a5ea10d23a294f13f5f477d78b9",
        lastCreated: Date.now().toString(),
        lastCalled: Date.now().toString(),
        originalEndpoint: "https://your-company/model/7d78b9",
        guardedEndpoint: "https://guardai.io/guarded/541b0f"
   },
   {
        modelName: "bank-of-america-chatbot-internal-v1.2.34",
        sha: "b8162c9332c89cd550ac44efac0778e5e3cfa848",
        lastCreated: Date.now().toString(),
        lastCalled: Date.now().toString(),
        originalEndpoint: "https://your-company/model/cfa848",
        guardedEndpoint: "https://guardai.io/guarded/910318"
   },
   {
        modelName: "bank-of-america-chatbot-website-v1.1.20",
        sha: "e2f6a8aa1fe6444b12bba643f5c73f607ab30010",
        lastCreated: Date.now().toString(),
        lastCalled: Date.now().toString(),
        originalEndpoint: "https://your-company/model/b30010",
        guardedEndpoint: "https://guardai.io/guarded/1039afd"
   },
   {
        modelName: "bank-of-america-chatbot-test-v1.3.0",
        sha: "616cfa5faf07874d46711bd0a5ce63ccbf88d104",
        lastCreated: Date.now().toString(),
        lastCalled: Date.now().toString(),
        originalEndpoint: "https://your-company/model/88d104",
        guardedEndpoint: "https://guardai.io/guarded/400181d"
   },
]

const ModelCard = (modelInfo: ModelInfo) => {
    return (
        <Card>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Row> {modelInfo.modelName} </Row>
                    <Text type='secondary'> SHA: {modelInfo.sha} </Text>
                </Col>

                <Col span={12}>
                    <Space>
                    <Button> Monitor </Button>
                    <Button> Edit </Button>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}

export function ModelPage() {
    return <>
        {modelList.map(modelInfo => ModelCard(modelInfo))}
    </>
}

