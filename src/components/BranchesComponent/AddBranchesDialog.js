import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const DialogTitle = withStyles(theme => ({
	root: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		margin: 0,
		padding: theme.spacing.unit * 2
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing.unit,
		top: theme.spacing.unit,
		color: theme.palette.grey[500]
	}
}))(props => {
	const { children, classes, onClose } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="Close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing.unit * 2
	}
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		borderTop: `1px solid ${theme.palette.divider}`,
		margin: 0,
		padding: theme.spacing.unit
	}
}))(MuiDialogActions);

class AddBranchesDialog extends React.Component {
	render() {
		return (
			<div>
				<Dialog
					onClose={this.props.handleClose}
					aria-labelledby="customized-dialog-title"
					open={this.props.open}
				>
					<DialogTitle
						id="customized-dialog-title"
						onClose={this.props.handleClose}
					>
						New Branch
					</DialogTitle>
					<DialogContent>
						<Typography gutterBottom>
							Fill all the forms field to add a new Branch. After filling all
							the fields click on add button at the bottom & that's will do!
						</Typography>
						{/* Add Form Fields as required*/}
						<TextField
							autoFocus
							margin="dense"
							id="branch"
							label="Branch Name"
							type="text"
							fullWidth
						/>
						<TextField
							autoFocus
							margin="dense"
							id="role"
							label="Role"
							type="text"
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button color="secondary" onClick={this.props.handleClose}>
							Close
						</Button>
						<Button color="primary">Add</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default AddBranchesDialog;
