import { Button, Card, Col, Row, Space, Statistic } from 'antd';
import React from 'react';

export default function Dashboard() {
	return (
		<Space direction='vertical' style={{ width: '100%'}}>
			<Card>
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Card>
						<Statistic title="Risk Score" value={93} suffix="/ 100" />
					</Card>
				</Col>							

				<Col span={8}>
					<Card>
						<Row justify={'space-around'} align={'bottom'}>
							<Statistic title="High Risk Alerts" value={5} valueStyle={{ color: 'red'}} /> 
							<Button type='link'> View Alerts</Button>
						</Row>
					</Card>
				</Col>							

			</Row>
			</Card>


			<Card>
				<Row gutter={[16, 16]}>
					<Col span={8}>
						<Card>
							<Statistic title="Deployed Models" value={5} />
						</Card>
					</Col>

					<Col span={8}>
						<Card>
							<Statistic title="Active Endpoints" value={3} />
						</Card>
					</Col>

					<Col span={8}>
						<Card>
							<Statistic title="Active Guards" value={14} />
						</Card>
					</Col>
				</Row>    
			</Card>

			<Card>
				<Row gutter={[16, 16]}>
					<Col span={6}>
						<Card>
							<Statistic title="API Calls" value={2130125} />
						</Card>
					</Col>

					<Col span={8}>
						<Card>
							<Statistic title="Tokens Used" value={32507213} />
						</Card>
					</Col>

					<Col span={8}>
						<Card>
							<Statistic title="Est. Monthly Cost" value={12415} prefix="$" />
						</Card>
					</Col>
				</Row>    
			</Card>

		</Space>
	)
}