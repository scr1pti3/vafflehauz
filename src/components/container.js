import React from 'react';
import Header from './header/header.js';

class Container extends React.Component {
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div className="container">
                <Header/>
            </div>
		);
	}
}

export default Container;
