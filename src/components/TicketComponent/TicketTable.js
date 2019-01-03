import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TicketDetailsDialog from './TicketDetailsDialog';

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

let id = 0;
function createData(branchName, customerName, status) {
	id += 1;
	return { id, branchName, customerName, status };
}
// populate with real data
const rows = [
	createData('Barisal Sodor', 'Debotos Das', 'Active'),
	createData('Khulna Sodor', 'Ripon Das', 'Active'),
	createData('Dhaka Sodor', 'Akash Das', 'InActive')
];

class SimpleTicketTable extends Component {
	state = {
		open: false,
		selectedTicketDetails: {}
	};

	handleClickOpen = () => {
		console.log('Opening Details Model!');
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleRowClick = rowDetails => {
		this.setState({ selectedTicketDetails: rowDetails }, () => {
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
								<TableCell align="center">ID</TableCell>
								<TableCell align="center">Branch Name</TableCell>
								<TableCell align="center">Customer Name</TableCell>
								<TableCell align="center">Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => {
								return (
									<TableRow
										key={row.id}
										onClick={() => this.handleRowClick(row)}
									>
										<TableCell align="center" component="th" scope="row">
											{row.id}
										</TableCell>
										<TableCell align="center">{row.branchName}</TableCell>
										<TableCell align="center">{row.customerName}</TableCell>
										<TableCell align="center">{row.status}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
				<TicketDetailsDialog
					open={this.state.open}
					handleClose={this.handleClose}
					details={this.state.selectedTicketDetails}
				/>
			</React.Fragment>
		);
	}
}

SimpleTicketTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTicketTable);
