import React, { ReactNode, useState } from "react";
import { Layout, Menu } from "antd";
import './index.css';
import {
  PieChartOutlined,
  FundOutlined,
  InfoCircleOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import { pageUrlAbout, pageUrlDashboard, pageUrlModels, pageUrlMonitor, pageUrlRoot } from "../../router/pages";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children: ReactNode;
}

const headerStyle: React.CSSProperties = {
  position: 'sticky',
  color: '#7dbcea',
  backgroundColor: '#fff',
  zIndex: 1,
  alignItems: 'center',
  display: 'flex'
};

const sideBarMenuItems= [
  {
    name: 'Dashboard',
    url: pageUrlDashboard,
    icon: <PieChartOutlined />
  },
  {
    name: 'Monitor',
    url: pageUrlMonitor,
    icon: <FundOutlined />
  },
  {
    name: 'Models',
    url: pageUrlModels,
    icon: <RobotOutlined />
  },
  {
    name: 'About',
    url: pageUrlAbout,
    icon: <InfoCircleOutlined />
  }
].map(entry => {
  return {
    label: <Link to={entry.url}>{entry.name}</Link>,
    key: entry.name,
    icon: entry.icon
  }
})
const defaultSelectedKey = 'Dashboard'


export function withLayout(elem: ReactNode) {
    return <MyLayout>
        {elem}
    </MyLayout>
}

export const MyLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKey]} items={sideBarMenuItems} mode="inline">
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={headerStyle}>
          <Link to={pageUrlRoot}> Guard AI</Link>
        </Header>
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