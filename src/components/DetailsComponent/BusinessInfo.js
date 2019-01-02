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

let id = 0;
function createData(name, numberBranches, accountStatus, id, date) {
	id += 1;
	return { id, name, numberBranches, accountStatus, id, date };
}
// populate with real data
const rows = [
	createData(
		'Duch Bangla Bank',
		'DBBL(109)',
		'Active',
		'12710578161',
		new Date().toLocaleDateString()
	),
	createData(
		'Duch Bangla Bank',
		'DBBL(109)',
		'Active',
		'12710578161',
		new Date().toLocaleDateString()
	),
	createData(
		'Duch Bangla Bank',
		'DBBL(109)',
		'Active',
		'12710578161',
		new Date().toLocaleDateString()
	),
	createData(
		'Duch Bangla Bank',
		'DBBL(109)',
		'Active',
		'12710578161',
		new Date().toLocaleDateString()
	)
];

function SimpleTable(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Organization Name</TableCell>
						<TableCell align="right">Number Branches</TableCell>
						<TableCell align="right">Account Status</TableCell>
						<TableCell align="right">ID Account</TableCell>
						<TableCell align="right">Valid Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => {
						return (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.numberBranches}</TableCell>
								<TableCell align="right">{row.accountStatus}</TableCell>
								<TableCell align="right">{row.id}</TableCell>
								<TableCell align="right">{row.date}</TableCell>
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
