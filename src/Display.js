import React, { Component } from 'react';
class Display extends Component{
	render(){
		return(
			<div>
				<p> My Name Is :  {this.props.name}</p>
		   		<p>Birth-month:  {this.props.bday} </p>
		   		<p> My Age is: {this.props.age}</p>
			</div>
			)
	}
}
export default Display;
