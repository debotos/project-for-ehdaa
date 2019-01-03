import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

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

const getActions = serial => {
	// in real case, serial can be id to determine uniqueness
	// now add onClick listener using this id
	// like below in delete button
	return (
		<div>
			<IconButton
				aria-label="Delete"
				onClick={() => {
					console.log('Deleting id ', serial);
					// callDeleteFunction(serial)
				}}
			>
				<DeleteIcon />
			</IconButton>
			<IconButton aria-label="Add New Account">
				<AddIcon />
			</IconButton>
			<Button size="small" color="primary">
				Reset Password
			</Button>
		</div>
	);
};

let serial = 0;
function createData(username, email, password, status) {
	serial += 1;
	return {
		serial,
		username,
		email,
		password,
		status,
		actions: getActions(serial)
	};
}
// populate with real data
const rows = [
	createData('debotos', 'debotosdas@gmail.com', '$kjfk@#jdkfjjf', 'Active'),
	createData('ripon', 'ripondas49@gmail.com', '$kjfk@))#jdkfjjf', 'Active'),
	createData('akash', 'adrazz@gmail.com', '$kjf&&@#jdkfjjf', 'Inactive')
];

class UsersTable extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell align="left">User Name</TableCell>
							<TableCell align="left">Email</TableCell>
							<TableCell align="left">Password</TableCell>
							<TableCell align="left">Status</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => {
							return (
								<TableRow key={row.serial}>
									<TableCell align="left" component="th" scope="row">
										{row.username}
									</TableCell>
									<TableCell align="left">{row.email}</TableCell>
									<TableCell align="left">{row.password}</TableCell>
									<TableCell align="left">{row.status}</TableCell>
									<TableCell>{row.actions}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

UsersTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsersTable);
