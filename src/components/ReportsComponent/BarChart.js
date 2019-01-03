import React, { Component } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

import BarChartDialog from './Dialog/BarChartDialog';

const data = [
	{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
	{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
	{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
	{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
	{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
	{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

class SimpleBarChart extends Component {
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
						<BarChart
							width={600}
							height={300}
							data={data}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="pv" fill="#8884d8" />
							<Bar dataKey="uv" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				</div>
				<BarChartDialog open={this.state.open} handleClose={this.handleClose} />
			</React.Fragment>
		);
	}
}

export default SimpleBarChart;
