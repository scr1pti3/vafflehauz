import React from 'react';
import NavBar from './navbar.js';

class Header extends React.Component {
	constructor(prop){
		super(prop);
	}

	render(){
		return(
            <header className="container mt-3">
                <NavBar/> 
            </header>
		);
	}
}

export default Header;
