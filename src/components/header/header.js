import React from 'react';
import NavBar from './navbar.js';
import Masthead from './masthead.js'
import './header.css'

function Header(props) {
    return(
        <>
            <NavBar/> 
            <header className="masthead">
                <Masthead/>
            </header>
        </>
    );
}

export default Header;
