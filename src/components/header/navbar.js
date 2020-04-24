import React, {useState} from 'react';
import './navbar.css'
import { 
    Navbar, 
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button,
    Collapse,
    UncontrolledCollapse
} from 'reactstrap';



function NavBar (props) {
    const [isOpen, setOpen] = useState(false);

    //NavLink active state collection
    const [activeCollection, setActiveCollection] = useState({});
    //navbar-shrink class state variable
    const [shrinkClass, setShrinkClass] = useState("");

    const navLinkElementArr = [
        "services",
        "portfolio",
        "about",
        "team",
        "contact"
    ];

    const navLinkStyle = {
        paddingRight: "0.5rem",
        paddingLeft: "0.5rem",
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        fontSize: "0.95rem",
        letterSpacing: "0.0625em",
    }

    //Event onclick; Change active state
    const toggleNavLink = e => {
        let key = e.target.text;
        let temp = {};
        temp[key] = true;
        setActiveCollection(temp);
    }

    //Event onclick; Collapse the navbar
    const toggleNavbar = () => setOpen(!isOpen);

    //Shrink Navbar on Scroll
    window.onscroll = () => {
        let shrinkMin = 200;
        if(document.body.scrollTop > shrinkMin || document.documentElement.scrollTop > shrinkMin) 
            setShrinkClass("navbar-shrink");
        else
            setShrinkClass("");
    };

    return (
        <Navbar id="mainNav" className={shrinkClass} expand="lg" fixed="top" role="navigation">
            <div className="container">
                <NavbarBrand href="#" className="text-light navbar-brand-style">Vafflehauz</NavbarBrand>
                <NavbarToggler style={{backgroundColor:"currentcolor"}} onClick={toggleNavbar}/>
                <Collapse isOpen={isOpen} id="test" navbar>
                    <Nav navbar className="ml-auto text-uppercase">
                        {
                            navLinkElementArr.map(elem => 
                                <NavItem key={elem}>
                                    <NavLink href={`#${elem}`} className="text-light nav-link-style" onClick={toggleNavLink}>
                                        {elem}
                                    </NavLink>
                                </NavItem>
                            )
                        }
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}
export default NavBar;
