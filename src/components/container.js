import React from 'react';
import Header from './header/header.js';
import Body from './body/body.js'
import './container.css'

function Container(props) {
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    );
}

export default Container;
