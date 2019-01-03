import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Layout from './hoc/layout';
import './style/custom.css';

import Account from './pages/Account';
import NewAccount from './pages/NewAccount';
import Edit from './pages/Edit';
import Details from './pages/Details';
import Filter from './pages/Filter';
import Reports from './pages/Reports';
import Role from './pages/Role';
import Users from './pages/Users';
import Ticket from './pages/Ticket';
import Branches from './pages/Branches';
import Workflow from './pages/Workflow';

// browser history
export const history = createHistory();
const withLayout = (Component, props, to) => (
	<Layout to={to}>
		<Component props={props} />
	</Layout>
);

export default class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route
						exact
						path="/account"
						component={props => withLayout(Account, props, '/account')}
					/>
					<Route
						exact
						path="/new"
						component={props => withLayout(NewAccount, props, '/new')}
					/>
					<Route
						exact
						path="/edit"
						component={props => withLayout(Edit, props, '/edit')}
					/>
					<Route
						exact
						path="/details"
						component={props => withLayout(Details, props, '/details')}
					/>
					<Route
						exact
						path="/filter"
						component={props => withLayout(Filter, props, '/filter')}
					/>
					<Route
						exact
						path="/reports"
						component={props => withLayout(Reports, props, '/reports')}
					/>
					<Route
						exact
						path="/role"
						component={props => withLayout(Role, props, '/role')}
					/>
					<Route
						exact
						path="/users"
						component={props => withLayout(Users, props, '/users')}
					/>
					<Route
						exact
						path="/ticket"
						component={props => withLayout(Ticket, props, '/ticket')}
					/>
					<Route
						exact
						path="/branches"
						component={props => withLayout(Branches, props, '/branches')}
					/>
					<Route
						exact
						path="/workflow"
						component={props => withLayout(Workflow, props, '/workflow')}
					/>
					{/* Add Other Routes below also add in the hoc/layout*/}
					<Redirect to="/account" />
				</Switch>
			</Router>
		);
	}
}
