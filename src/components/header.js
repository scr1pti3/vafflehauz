import React from 'react';
import "./header.css";

class Header extends React.Component {
	render(){
		return(
			<div className="Header">
                <h1> Vafflehauz </h1>
				<span className="text-muted"> This is Header </span>
			</div>
		);
	}
}

export default Header;
