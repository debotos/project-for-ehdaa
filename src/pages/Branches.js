import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

import BranchesTable from '../components/BranchesComponent/BranchesTable';
import AddBranchesDialog from '../components/BranchesComponent/AddBranchesDialog';

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});

class Branches extends Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({
			open: true
		});
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Fab
					variant="extended"
					color="primary"
					aria-label="Add"
					className={classes.margin}
					onClick={this.handleClickOpen}
				>
					<AddIcon />
					Add New Branch
				</Fab>
				<BranchesTable />
				<AddBranchesDialog
					open={this.state.open}
					handleClose={this.handleClose}
				/>
			</div>
		);
	}
}

Branches.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Branches);
