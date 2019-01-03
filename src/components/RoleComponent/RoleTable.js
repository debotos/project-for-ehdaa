import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import RoleDetailsDialog from './RoleDetailsDialog';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	}
});

let serial = 0;
function createData(name, description) {
	serial += 1;
	return { serial, name, description };
}
// populate with real data
const rows = [
	createData('Junior Developer', 'Full Stack Developer'),
	createData('Senior Developer', 'Frontend Developer'),
	createData('Internship Student', 'Backend Developer')
];

class SimpleRoleTable extends Component {
	state = {
		open: false,
		selectedRoleDetails: {}
	};

	handleClickOpen = () => {
		console.log('Opening Details Model!');
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleRowClick = rowDetails => {
		this.setState({ selectedRoleDetails: rowDetails }, () => {
			this.handleClickOpen();
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<React.Fragment>
				<Paper className={classes.root}>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell align="center">Role Name</TableCell>
								<TableCell align="center">Description</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => {
								return (
									<TableRow
										key={row.serial}
										onClick={() => this.handleRowClick(row)}
									>
										<TableCell align="center" component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="center">{row.description}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
				<RoleDetailsDialog
					open={this.state.open}
					handleClose={this.handleClose}
					details={this.state.selectedRoleDetails}
				/>
			</React.Fragment>
		);
	}
}

SimpleRoleTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleRoleTable);
