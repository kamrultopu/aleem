import React from 'react';
import HeaderLabel from './component/HeaderLabel.jsx';
import Label from './component/Label.jsx';
import Button from './component/Button.jsx';

var divStyle = {
	backgroundColor: 'blue',
    color:'white',
    textAlign:'center',
    padding:5
};

class Header extends React.Component{
	render(){
		return (
			<div style={divStyle}>
				<HeaderLabel label="Aleem Management | BIS, Hoover, AL"/>
				<Label align='right' string={new Date().toString()} />
				<Button label="Log On" />
			</div>
		);
	}
}



export default Header;
