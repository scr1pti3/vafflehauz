import React, {useState} from 'react';
import Scrollspy from 'react-scrollspy';
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

function NavBar(props) {
  const [isOpen, setOpen] = useState(false);

  //navbar-shrink class state variable
  const [mainNavShrinkClass, setMainNavShrinkClass] = useState("");
  const [brandShrinkClass, setBrandShrinkClass] = useState("");

  //Nav Element array
  const navLinkElementArr = ["services", "portfolio", "about", "team", "contact"];

  //Event onclick; Collapse the navbar
  const toggleNavbar = () => setOpen(!isOpen);

  //Shrink Navbar on Scroll
  window.onscroll = () => {
    let shrinkMin = 200;
    
    //Shrink when document is scrolled passed shrinkMin
    if (document.body.scrollTop > shrinkMin || document.documentElement.scrollTop > shrinkMin) {
      setMainNavShrinkClass("navbar-shrink");
      setBrandShrinkClass("navbar-brand-shrink")
    } else {
      setMainNavShrinkClass("");
      setBrandShrinkClass("");
    }
  };

  return (<Navbar dark id="mainNav" className={mainNavShrinkClass} expand="lg" fixed="top" role="navigation">
    <Container>
      <NavbarBrand href="#" className={`navbar-brand-style ${brandShrinkClass}`}>Vafflehauz</NavbarBrand>
      <NavbarToggler style={{
          backgroundColor: "#261C16"
        }} onClick={toggleNavbar}/>
      <Collapse isOpen={isOpen} navbar>
        <Scrollspy items={navLinkElementArr} offset={-10} className="ml-auto text-uppercase text-light navbar-nav" currentClassName="is-current">
          {
            navLinkElementArr.map(elem => <NavItem key={elem}>
                <NavLink href={`#${elem}`} className="nav-link-style" style={{color: 'inherit'}}>
                  {elem}
                </NavLink>
            </NavItem>)
          }
        </Scrollspy>
      </Collapse>
    </Container>
  </Navbar>);
}
export default NavBar;
