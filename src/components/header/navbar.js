import React, {useState} from 'react';
import './navbar.css'
import { 
    Container,
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
    const [mainNavShrinkClass, setMainNavShrinkClass] = useState("");
    const [brandShrinkClass, setBrandShrinkClass] = useState("");

    const navLinkElementArr = [
        "services",
        "portfolio",
        "about",
        "team",
        "contact"
    ];


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
        if(document.body.scrollTop > shrinkMin || document.documentElement.scrollTop > shrinkMin) {
            setMainNavShrinkClass("navbar-shrink");
            setBrandShrinkClass("navbar-brand-shrink")
        }
        else {
            setMainNavShrinkClass("");
            setBrandShrinkClass("");
        }
    };

    return (
        <Navbar dark id="mainNav" className={mainNavShrinkClass} expand="lg" fixed="top" role="navigation">
            <Container>
                <NavbarBrand href="#" className={`navbar-brand-style ${brandShrinkClass}`}>Vafflehauz</NavbarBrand>
                <NavbarToggler style={{backgroundColor:"#261C16"}} onClick={toggleNavbar}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="ml-auto text-uppercase">
                        {
                            navLinkElementArr.map(elem => 
                                <NavItem key={elem}>
                                    <NavLink href={`#${elem}`} className="nav-link-style text-light" onClick={toggleNavLink}>
                                        {elem}
                                    </NavLink>
                                </NavItem>
                            )
                        }
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
