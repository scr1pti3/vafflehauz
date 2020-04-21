import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const brandStyle = {
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
}

function NavBar (props) {
    return (
        <Navbar bg="light" expand="lg" className="justify-content-between">
                <Navbar.Brand href="#home" style={brandStyle}>Vafflehauz</Navbar.Brand>
                <Nav fill variant="pills">
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar>
    )
}
export default NavBar;
