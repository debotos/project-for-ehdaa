import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LineChart from '../components/ReportsComponent/LineChart';
import BarChart from '../components/ReportsComponent/BarChart';
import PieChart from '../components/ReportsComponent/PieChart';
import Numbers from '../components/ReportsComponent/Numbers';

const styles = theme => ({
	root: {
		flexGrow: 1
	}
});

class Reports extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={24}>
					<Grid item sm={12} lg={6}>
						<PieChart />
					</Grid>

					<Grid item sm={12} lg={6} style={{ textAlign: 'center' }}>
						<Numbers />
					</Grid>

					<Grid item sm={12} lg={6}>
						<LineChart />
					</Grid>

					<Grid item sm={12} lg={6}>
						<BarChart />
					</Grid>
				</Grid>
			</div>
		);
	}
}

Reports.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reports);
