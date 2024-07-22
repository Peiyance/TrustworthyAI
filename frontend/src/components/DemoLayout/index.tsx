import React, { ReactNode, useState } from "react";
import { Layout, Menu } from "antd";
import './index.css';
import {
  PieChartOutlined,
  FundOutlined,
  RobotOutlined,
  BankOutlined
} from '@ant-design/icons';
import { pageUrlDemoBias, pageUrlDemoCompliance, pageUrlDemoHarmfulPrompt, pageUrlDemoPrivacy } from "../../router/pages";
import { Link } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

interface Props {
  children: ReactNode;
}

const sideBarMenuItems= [
  {
    name: 'Harmful Prompt',
    url: pageUrlDemoHarmfulPrompt,
    icon: <PieChartOutlined />
  },
  {
    name: 'Privacy',
    url: pageUrlDemoPrivacy,
    icon: <FundOutlined />
  },
  {
    name: 'Bias',
    url: pageUrlDemoBias,
    icon: <RobotOutlined />
  },
  {
    name: 'Compliance',
    url: pageUrlDemoCompliance,
    icon: <BankOutlined />
  },
].map(entry => {
  return {
    label: <Link to={entry.url}>{entry.name}</Link>,
    key: entry.name,
    icon: entry.icon
  }
})
const defaultSelectedKey = 'Dashboard'


export function withDemoLayout(elem: ReactNode) {
    return <DemoLayout>
        {elem}
    </DemoLayout>
}

export const DemoLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKey]} items={sideBarMenuItems} mode="inline">
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ padding: '16px' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Guard AI - Demo use only!
        </Footer>
      </Layout>
    </Layout>
  );
}