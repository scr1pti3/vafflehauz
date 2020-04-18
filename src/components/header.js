import React from 'react';
import "./header.css";

class Header extends React.Component {

	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div className="Header">
				<div className="row">
                	<h1> Vafflehauz Header </h1>
                </div>
			</div>
		);
	}
}

export default Header;
