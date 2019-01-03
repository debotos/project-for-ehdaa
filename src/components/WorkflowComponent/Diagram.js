import React, { Component } from 'react';

import DiagramImage from '../../assets/tree_diagram.png';

export default class Diagram extends Component {
	render() {
		let { data } = this.props; // Work with this data
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				Diagram of {data}
				<img src={DiagramImage} alt={`Diagram of ${data}`} />
			</div>
		);
	}
}
