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

class LineChartDialog extends React.Component {
	render() {
		const { classes } = this.props;
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
								Line Chart Details
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
							Line Chart Details
						</Typography>
					</div>
				</Dialog>
			</div>
		);
	}
}

LineChartDialog.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LineChartDialog);
