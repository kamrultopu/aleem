import React from 'react';

var buttonStyle = {
	margin: '10px 10px 10px 0'
};

class Button extends React.Component {
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	};
	handleClick(){
		alert("hi");
	}
	render(){
		return (
			<button className='btn btn-default' style={buttonStyle} onClick={this.handleClick}>
				{this.props.label}
			</button>
		);
	}
}

export default Button;