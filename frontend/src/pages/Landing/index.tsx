import React from 'react';
import { Button, Layout } from 'antd';
import './index.css'; // Make sure to create this CSS file for additional styles
import { Link, useNavigate } from 'react-router-dom';
import { pageUrlDashboard, pageUrlDemoHarmfulPrompt, pageUrlOldAttack } from '../../router/pages';

function LandingPage() {

  const navigate = useNavigate()

  const handleClick = (url: string) => {
    navigate(url)
  }

  return (
    <Layout>
      <div className="landing-page">
        <div className="dark-shade">
          <div className="content">
            <h1 className="title">Guard AI</h1>
            <p className="description">
              Safeguard your Large Language Models
            </p>
            <div className="button-group-demo">

              <Button className="button-demo" type="primary" size="large" onClick={() => handleClick(pageUrlOldAttack)}>
                Demo: Detection
              </Button>
              <Button className="button-demo" type="primary" size="large" onClick={() => handleClick(pageUrlDashboard)}>
                Demo: Dashboard
              </Button>
              <Button className="button-demo" type="primary" size="large" onClick={() => handleClick(pageUrlDemoHarmfulPrompt)}>
                Demo: Guards
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage;
