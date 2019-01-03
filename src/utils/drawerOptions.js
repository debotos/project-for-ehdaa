import React from 'react';
import Account from '@material-ui/icons/AccountCircleOutlined';
import AddBox from '@material-ui/icons/AddBox';
import Edit from '@material-ui/icons/Edit';
import Details from '@material-ui/icons/Details';
import Filter from '@material-ui/icons/Filter1Sharp';
import Reports from '@material-ui/icons/TableChart';

// Index is very important here!
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
	'Reports'
];

export const optionsIconArray = [
	<Account />,
	<AddBox />,
	<Edit />,
	<Details />,
	<Filter />,
	<Reports />
];

export const optionsRouteArray = [
	'/account',
	'/new',
	'/edit',
	'/details',
	'/filter',
	'/reports'
];
