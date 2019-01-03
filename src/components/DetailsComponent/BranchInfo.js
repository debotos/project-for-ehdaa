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
function createData(role, branches, info) {
	serial += 1;
	return { serial, role, branches, info };
}
// populate with real data
const rows = [
	createData('Junior Developer', 'Barisal Sodor', 'Full Stack Developer'),
	createData('Junior Developer', 'Barisal Sodor', 'Full Stack Developer'),
	createData('Junior Developer', 'Barisal Sodor', 'Full Stack Developer')
];

function SimpleTable(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Role</TableCell>
						<TableCell>Branches</TableCell>
						<TableCell>Info</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => {
						return (
							<TableRow key={row.serial}>
								<TableCell component="th" scope="row">
									{row.role}
								</TableCell>
								<TableCell>{row.branches}</TableCell>
								<TableCell>{row.info}</TableCell>
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
