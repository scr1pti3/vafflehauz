import React from 'react';
import Nav from 'react-bootstrap/Nav';

class Menu extends React.Component {

	constructor(prop){
		super(prop);
	}

	render (){
		return (
			<div className="Menu">
				<Nav fill variant="tabs" className="justify-content-end" activeKey="">
   			    	<Nav.Item>
     					<Nav.Link href="link-1">Link 1</Nav.Link>
   					</Nav.Item>

   					<Nav.Item>
      					<Nav.Link eventKey="link-2">Link 2</Nav.Link>
    				</Nav.Item>

    				<Nav.Item>
      					<Nav.Link eventKey="link-3">Link 3</Nav.Link>
   					</Nav.Item>
  				</Nav>
			</div>
		
		);
	}
}

export default Menu;
