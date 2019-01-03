import React, { Component } from 'react';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

import LineChartDialog from './Dialog/LineChartDialog';

const data = [
	{ name: 'Mon', Visits: 2200, Orders: 3400 },
	{ name: 'Tue', Visits: 1280, Orders: 2398 },
	{ name: 'Wed', Visits: 5000, Orders: 4300 },
	{ name: 'Thu', Visits: 4780, Orders: 2908 },
	{ name: 'Fri', Visits: 5890, Orders: 4800 },
	{ name: 'Sat', Visits: 4390, Orders: 3800 },
	{ name: 'Sun', Visits: 4490, Orders: 4300 }
];

class SimpleLineChart extends Component {
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
					<ResponsiveContainer height={300}>
						<LineChart data={data}>
							<XAxis dataKey="name" />
							<YAxis />
							<CartesianGrid vertical={false} strokeDasharray="3 3" />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
							<Line
								type="monotone"
								dataKey="Orders"
								stroke="#8884d8"
								activeDot={{ r: 8 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
				<LineChartDialog
					open={this.state.open}
					handleClose={this.handleClose}
				/>
			</React.Fragment>
		);
	}
}

export default SimpleLineChart;
