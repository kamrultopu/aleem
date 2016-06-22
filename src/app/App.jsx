import React from 'react';
import Button from './component/Button.jsx';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			data:
			[
				{
					"id":1,
					"name":"Foo",
					"age":"20"
				},

				{
					"id":2,
					"name":"Boo",
					"age":"21"
				},

				{
					"id":3,
					"name":"Xoo",
					"age":"23"
				}
			]
		}
	}
	render(){
		return (
			<div>
				<Button label="Log In" />
				<table>
					<tbody>
						{this.state.data.map((person,i) => <TableRow key= {i} data = {person} number={i+1} />)}
					</tbody>
				</table>
			</div>
		);
	}
}


class TableRow extends React.Component {
	render(){
		return(
			<tr>
				<td> {this.props.number}</td>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

export default App;
