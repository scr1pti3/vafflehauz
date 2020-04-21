import React, {useState} from 'react';
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
    const [isActive, setActive] = useState({
        home: false,
        gallery: false,
        about: false
    });
    return (
        <Navbar light color="light" expand="lg" className="justify-content-between">
                <NavbarBrand href="#home" style={brandStyle}>Vafflehauz</NavbarBrand>
                <Nav pills>
                    <NavItem>
                        <NavLink href="#home" active={isActive.home}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#gallery" active={isActive.gallery}>Gallery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#about" active={isActive.about}>About</NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
    );
}
export default NavBar;
