import React from 'react';
import Header from './header.js';
import Footer from './footer.js';

class Container extends React.Component {
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div className="Container">
                <Header/>
                <Footer/>
            </div>
		);
	}
}

export default Container;
