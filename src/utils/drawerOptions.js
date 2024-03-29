import React from 'react';
import Account from '@material-ui/icons/AccountCircleOutlined';
import AddBox from '@material-ui/icons/AddBox';
import Edit from '@material-ui/icons/Edit';
import Details from '@material-ui/icons/Details';
import Filter from '@material-ui/icons/Filter1Sharp';
import Reports from '@material-ui/icons/TableChart';
import Role from '@material-ui/icons/Whatshot';
import Users from '@material-ui/icons/PeopleOutline';
import Ticket from '@material-ui/icons/HowToVote';
import Branches from '@material-ui/icons/Equalizer';
import Workflow from '@material-ui/icons/Work';

// Index/position is very important here!
// So, if you are removing one item then
// remove the corresponding index element
// from other 3 array
// Also update the App.js files route prop in withLayout() 3'rd arg

export const optionsTextArray = [
	'Account',
	'Add New Account',
	'Edit',
	'Details',
	'Filter',
	'Reports',
	'Role',
	'Users',
	'Ticket',
	'Branches',
	'Workflow'
];

export const optionsIconArray = [
	<Account />,
	<AddBox />,
	<Edit />,
	<Details />,
	<Filter />,
	<Reports />,
	<Role />,
	<Users />,
	<Ticket />,
	<Branches />,
	<Workflow />
];

export const optionsRouteArray = [
	'/account',
	'/new',
	'/edit',
	'/details',
	'/filter',
	'/reports',
	'/role',
	'/users',
	'/ticket',
	'/branches',
	'/workflow'
];
