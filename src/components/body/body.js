import React from 'react';
import Services from './services.js';
import Portoflio from './portfolio.js';
import About from './about.js';
import Team from './team.js';
import Contact from './contact.js';
import './body.css';

function Body(props) {
    return (
        <>
            <Services/>
            <Portoflio/> 
            <About/>
            <Team/>
            <Contact/>
        </>
    );
}

export default Body;
