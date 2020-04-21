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
    const [isActive, setActive] = useState({Home: true});

    function toggle (e) {
        let key = e.target.text;
        let temp = {};
        temp[key] = true;
        setActive(temp);
    }

    return (
        <Navbar light color="light" expand="lg" className="justify-content-between">
                <NavbarBrand href="#home" style={brandStyle}>Vafflehauz</NavbarBrand>
                <Nav pills>
                    <NavItem>
                        <NavLink href="#home" active={isActive.Home} onClick={(e) => toggle(e)}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#gallery" active={isActive.Gallery} onClick={(e) => toggle(e)}>Gallery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#about" active={isActive.About} onClick={(e) => toggle(e)}>About</NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
    );
}
export default NavBar;
