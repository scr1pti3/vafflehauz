import React from 'react';
import "./header.css";

class Header extends React.Component {

	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div className="Header">
                <h1> Vafflehauz </h1>
			</div>
		);
	}
}

export default Header;
