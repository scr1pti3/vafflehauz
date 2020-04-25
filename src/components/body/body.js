import React from 'react';
import Services from './services.js'
import Portoflio from './portfolio.js'
import './body.css';

function Body(props) {
    return (
        <>
            <Services/>
            <Portoflio/> 
        </>
    );
}

export default Body;
