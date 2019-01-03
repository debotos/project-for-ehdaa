import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import NumberDialog from './Dialog/NumberDialog';

export default class Numbers extends Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		console.log('Opening Details Model!');
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		return (
			<React.Fragment>
				<div onClick={() => this.handleClickOpen()}>
					<Typography component="h2" variant="display3" gutterBottom>
						Numbers
					</Typography>
				</div>
				<NumberDialog open={this.state.open} handleClose={this.handleClose} />
			</React.Fragment>
		);
	}
}
