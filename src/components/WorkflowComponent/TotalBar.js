import React, { Component } from 'react';

export default class TotalBar extends Component {
	render() {
		let { data } = this.props;
		return (
			<div style={{ padding: '1rem', border: '2px solid green' }}>
				TotalBar of {data}
			</div>
		);
	}
}
