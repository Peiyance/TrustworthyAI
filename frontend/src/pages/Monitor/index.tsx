import { Button, Card, Col, Row, Space, Statistic } from 'antd';
import ReactECharts from 'echarts-for-react';
import React from 'react';

const riskScores = {
	title: {
		text: 'Average Risk Score',
		left: 'center'
	},
	grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    data: ['2023/08', '2023/09', '2023/10', '2023/11', '2023/12', '2024/01', '2024/02']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [79, 80, 90, 91, 90, 91, 90],
      type: 'line'
    }
  ],

} 

const costPerMonth= {
	title: {
		text: 'Guard Cost Per Month',
		left: 'center'
	},
	grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    data: ['2023/08', '2023/09', '2023/10', '2023/11', '2023/12', '2024/01', '2024/02']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [1505.5, 1541.6, 1314.5, 1350.3, 1300.2, 1290.5, 1298.9],
      type: 'line'
    }
  ],
}

export default function Monitor() {
	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<ReactECharts option={riskScores} />
				</Col>

				<Col span={12}>
					<ReactECharts option={costPerMonth} />
				</Col>
			</Row>
			<br />

			<Card title='Top Warnings'>
				None	
			</Card>
		</>
	)
}