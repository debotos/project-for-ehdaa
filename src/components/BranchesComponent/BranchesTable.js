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
import EditIcon from '@material-ui/icons/Edit';

import BranchesDetailsDialog from './BranchesDetailsDialog';

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
				<EditIcon />
			</IconButton>
			<DetailsSection id={serial} />
		</div>
	);
};

class DetailsSection extends Component {
	state = {
		open: false,
		details: {}
	};

	handleClickOpen = () => {
		console.log('Opening Details Model!');
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	handleRowClick = id => {
		// Make the network request using id (arg) and then
		// set the details from incomming result
		let data = {}; // assuming data is comming from ajax then inside .then() do below
		this.setState({ details: data }, () => {
			this.handleClickOpen();
		});
	};
	render() {
		let { id } = this.props;
		return (
			<React.Fragment>
				<Button
					size="small"
					color="primary"
					onClick={() => this.handleRowClick(id)}
				>
					Details
				</Button>
				<BranchesDetailsDialog
					open={this.state.open}
					handleClose={this.handleClose}
					details={this.state.details}
				/>
			</React.Fragment>
		);
	}
}

let serial = 0;
function createData(name, id, role) {
	serial += 1;
	return { serial, name, id, role, actions: getActions(serial) };
}
// populate with real data
const rows = [createData('Barisal Sodor DBBL', 'DBBLBD', 'Main Zone')];

class SimpleBranchesTable extends Component {
	render() {
		const { classes } = this.props;

		return (
			<React.Fragment>
				<Paper className={classes.root}>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell align="left">Branches Name</TableCell>
								<TableCell align="left">Branches ID</TableCell>
								<TableCell align="left">Add Role</TableCell>
								<TableCell align="center">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => {
								return (
									<TableRow key={row.serial}>
										<TableCell align="left" component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="left">{row.id}</TableCell>
										<TableCell align="left">{row.role}</TableCell>
										<TableCell align="center">{row.actions}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
			</React.Fragment>
		);
	}
}

SimpleBranchesTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBranchesTable);
