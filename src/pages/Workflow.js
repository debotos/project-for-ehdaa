import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';

import TotalBar from '../components/WorkflowComponent/TotalBar';
import Diagram from '../components/WorkflowComponent/Diagram';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	}
});

class Workflow extends React.Component {
	state = {
		Workflow: '',
		labelWidth: 0
	};

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		});
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { classes } = this.props;
		const { Workflow } = this.state;

		return (
			<Grid container spacing={24}>
				<Grid item sm={12} lg={6}>
					<form className={classes.root} autoComplete="off">
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel
								ref={ref => {
									this.InputLabelRef = ref;
								}}
								htmlFor="outlined-Workflow"
							>
								Workflow
							</InputLabel>
							<Select
								value={this.state.Workflow}
								onChange={this.handleChange}
								input={
									<OutlinedInput
										labelWidth={this.state.labelWidth}
										name="Workflow"
										id="outlined-Workflow"
									/>
								}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</form>
				</Grid>

				<Grid item sm={12} lg={6} style={{ textAlign: 'center' }}>
					{Workflow && <TotalBar data={Workflow} />}
				</Grid>

				<Grid item sm={12} lg={12} style={{ textAlign: 'center' }}>
					{Workflow && <Diagram data={Workflow} />}
				</Grid>
			</Grid>
		);
	}
}

Workflow.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Workflow);
