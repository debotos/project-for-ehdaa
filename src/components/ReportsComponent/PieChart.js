import React, { Component } from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import { PieChart, Pie, Cell } from 'recharts';

import PieChartDialog from './Dialog/PieChartDialog';

const data = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

class SimplePieChart extends Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		console.log('Opening Details Model!');
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<React.Fragment>
				<div onClick={() => this.handleClickOpen()}>
					<ResponsiveContainer height={400}>
						<PieChart height={400}>
							<Pie
								data={data}
								dataKey="value"
								cx={300}
								cy={200}
								labelLine={false}
								label={renderCustomizedLabel}
								outerRadius={80}
								fill="#8884d8"
							>
								{data.map((entry, index) => (
									<Cell key={index} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
				<PieChartDialog open={this.state.open} handleClose={this.handleClose} />
			</React.Fragment>
		);
	}
}

export default SimplePieChart;
