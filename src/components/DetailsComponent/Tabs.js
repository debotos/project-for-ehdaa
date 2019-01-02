import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import BusinessInfo from './BusinessInfo';
import BranchInfo from './BranchInfo';
import UserInfo from './UserInfo';

const styles = {
	root: {
		flexGrow: 1
	}
};

function TabContainer(props) {
	return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

class CenteredTabs extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<Paper className={classes.root}>
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Business Info" />
					<Tab label="Branch Info" />
					<Tab label="User Info" />
				</Tabs>
				{value === 0 && (
					<TabContainer>
						<BusinessInfo />
					</TabContainer>
				)}
				{value === 1 && (
					<TabContainer>
						<BranchInfo />
					</TabContainer>
				)}
				{value === 2 && (
					<TabContainer>
						<UserInfo />
					</TabContainer>
				)}
			</Paper>
		);
	}
}

CenteredTabs.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
