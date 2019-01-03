import React from 'react';
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
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	}
});

let serial = 0;
function createData(name, phone, email) {
	serial += 1;
	return { serial, name, phone, email };
}
// populate with real data
const rows = [
	createData('Debotos Das', '+8801982134040', 'debotosdas@gmail.com'),
	createData('Debotos Das', '+8801982134040', 'debotosdas@gmail.com'),
	createData('Debotos Das', '+8801982134040', 'debotosdas@gmail.com'),
	createData('Debotos Das', '+8801982134040', 'debotosdas@gmail.com')
];

function SimpleTable(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => {
						return (
							<TableRow key={row.serial}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell>{row.phone}</TableCell>
								<TableCell>{row.email}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

SimpleTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
