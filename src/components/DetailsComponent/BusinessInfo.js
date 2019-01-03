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
function createData(
	subscribeValid,
	phone,
	email,
	person,
	o_n,
	numberBranch,
	userName,
	accountStatus
) {
	serial += 1;
	return {
		serial,
		subscribeValid,
		phone,
		email,
		person,
		o_n,
		numberBranch,
		userName,
		accountStatus
	};
}
// populate with real data
const rows = [
	createData(
		'DBBL',
		'+8801790015380',
		'debotosdas@gmail.com',
		'Debotos Das',
		'Yes O/N',
		'DBBL Barisal',
		'debotos',
		'Active'
	),
	createData(
		'DBBL',
		'+8801790015380',
		'debotosdas@gmail.com',
		'Debotos Das',
		'Yes O/N',
		'DBBL Barisal',
		'debotos',
		'Active'
	),
	createData(
		'DBBL',
		'+8801790015380',
		'debotosdas@gmail.com',
		'Debotos Das',
		'Yes O/N',
		'DBBL Barisal',
		'debotos',
		'Active'
	)
];

function SimpleTable(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Subscribe Valid</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Person</TableCell>
						<TableCell>O/N</TableCell>
						<TableCell>Number Branch</TableCell>
						<TableCell>User Name</TableCell>
						<TableCell>Account Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => {
						return (
							<TableRow key={row.serial}>
								<TableCell>{row.subscribeValid}</TableCell>
								<TableCell>{row.phone}</TableCell>
								<TableCell>{row.email}</TableCell>
								<TableCell>{row.person}</TableCell>
								<TableCell>{row.o_n}</TableCell>
								<TableCell>{row.numberBranch}</TableCell>
								<TableCell>{row.userName}</TableCell>
								<TableCell>{row.accountStatus}</TableCell>
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
