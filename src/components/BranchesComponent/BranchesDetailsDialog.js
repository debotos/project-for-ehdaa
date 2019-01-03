import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import BranchesDetailsTable from './BranchesDetailsTable';

const styles = {
	appBar: {
		position: 'relative'
	},
	flex: {
		flex: 1
	}
};

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class BranchesDetailsDialog extends React.Component {
	render() {
		const { classes, details } = this.props;
		console.log(details); // This contain all the info of selected Branches
		return (
			<div>
				<Dialog
					fullScreen
					open={this.props.open}
					onClose={this.props.handleClose}
					TransitionComponent={Transition}
				>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								onClick={this.props.handleClose}
								aria-label="Close"
							>
								<CloseIcon />
							</IconButton>
							<Typography variant="h6" color="inherit" className={classes.flex}>
								Branches Details
							</Typography>
							<Button color="inherit" onClick={this.props.handleClose}>
								Close
							</Button>
						</Toolbar>
					</AppBar>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							marginTop: '1rem'
						}}
					>
						<Typography variant="h6" color="inherit" className={classes.flex}>
							Branches Details
						</Typography>
						<BranchesDetailsTable />
					</div>
				</Dialog>
			</div>
		);
	}
}

BranchesDetailsDialog.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BranchesDetailsDialog);
