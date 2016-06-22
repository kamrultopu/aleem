import React from 'react';
import Anchor from './component/Anchor.jsx';



class Navigator extends React.Component{
	render(){
		return (
			<div >
				<Anchor target="index.html" string="Home" />
			</div>
		);
	}
}



export default Navigator;
