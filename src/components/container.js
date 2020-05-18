import React from 'react';
import Header from './header/header.js';
import Body from './body/body.js';
import Footer from './footer/footer.js';
import './container.css';

function Container(props) {
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

export default Container;
