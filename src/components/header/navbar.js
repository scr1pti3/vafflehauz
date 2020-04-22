import React, {useState} from 'react';
import './navbar.css'
import { 
    Navbar, 
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const brandStyle = {
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
}

function NavBar (props) {
    const [isActive, setActive] = useState({Home: true});

    const toggle = e => {
        let key = e.target.text;
        let temp = {};
        temp[key] = true;
        setActive(temp);
    }

    return (
        <Navbar id="mainNav" expand="lg" className="fixed-top">
            <div className="container">
                <NavbarBrand href="#home" className="text-light" style={brandStyle}>Vafflehauz</NavbarBrand>
                <div className="navbar-collapse collapse">
                    <Nav pills className="ml-auto text-uppercase">
                        <NavItem>
                            <NavLink href="#home" className="text-light" active={isActive.Home} onClick={(e) => toggle(e)}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#gallery" className="text-light" active={isActive.Gallery} onClick={(e) => toggle(e)}>Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about" className="text-light" active={isActive.About} onClick={(e) => toggle(e)}>About</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </Navbar>
    );
}
export default NavBar;
