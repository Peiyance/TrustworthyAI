import React from "react";
import { Card, Tabs, TabsProps } from 'antd'
import { FeatureCardContent } from "./FeatureCardContent";
import './index.css'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Test ChatGPT 3.5`,
    children: <FeatureCardContent llmName="GPT35"/>,
  },
  {
    key: '2',
    label: `Test ChatGPT 4.0`,
    children: <FeatureCardContent llmName="GPT4"/>,
  },
  {
    key: '3',
    label: `Test Gemini`,
    children: <FeatureCardContent llmName="Gemini"/>,
  },

];

export function FeatureCard() {
    return (
        <Card className="feature-card">
            <Tabs items={items}></Tabs>
        </Card>
    )
}