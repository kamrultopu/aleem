import React from 'react';

class Anchor extends React.Component {
	render(){
		return (
			<div>
				<a href={this.props.target}>{this.props.string}</a>
			</div>
		);
	}
}

export default Anchor;