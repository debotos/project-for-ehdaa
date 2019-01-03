import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		width: '90%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	}
});

let serial = 0;
function createData(feature, option) {
	serial += 1;
	return { serial, feature, option };
}
// populate with real data
const rows = [
	createData('Full Access', 'Read, Write, Delete'),
	createData('Partial Access', 'Read, Write'),
	createData('Read Access', 'Read')
];

class RoleDetailsTable extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell align="center">Features</TableCell>
							<TableCell align="center">Options Read/Write</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => {
							return (
								<TableRow key={row.serial}>
									<TableCell align="center" component="th" scope="row">
										{row.feature}
									</TableCell>
									<TableCell align="center">{row.option}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

RoleDetailsTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RoleDetailsTable);
