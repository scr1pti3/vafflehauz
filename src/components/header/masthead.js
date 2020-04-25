import React from 'react';
import { Jumbotron } from 'reactstrap';
import './masthead.css'

function Masthead(props) {
    return (
        <Jumbotron style={{backgroundColor: "transparent"}}>
            <h1 className="masthead-subheading text-center text-light">Hello, World!</h1>
            <p className="masthead-heading text-uppercase text-center text-light">Welcome To Our Site</p>
            
        </Jumbotron>
    );
}

export default Masthead;
