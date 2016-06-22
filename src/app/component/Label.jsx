import React from 'react';

var divStyle = {
	backgroundColor: 'black',
    color:'white',
    padding:5
};

class Header extends React.Component{
	render(){
		return (
			<p align={this.props.align}>
				{this.props.string}
			</p>
		);
	}
}



export default Header;
