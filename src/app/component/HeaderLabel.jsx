import React from 'react';

class HeaderLabel extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.label}</h1>
			</div>
		);
	}
}

export default HeaderLabel;