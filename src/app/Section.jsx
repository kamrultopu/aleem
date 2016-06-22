import React from 'react';

var divStyle = {
	position:  'relative',
	height: '100%',
	width: '100%',
    scrolling: 'no',
    frameborder: 0
};

class Section extends React.Component{
	render(){
		return (
			<div>
				<iframe style={divStyle} id={this.props.id} src={this.props.target} height={this.props.ht} width={this.props.wd}/>
			</div>
		);
	}
}



export default Section;
