import React from 'react';
import { Jumbotron } from 'reactstrap';
import './masthead.css'

function Masthead(props) {
    return (
        <Jumbotron style={{backgroundColor: "transparent", overflow: "hidden"}}>
            <div className="masthead-subheading text-center text-light">{props.subheading}</div>
            <div className="masthead-heading text-uppercase text-center text-light">{props.heading}</div>

        </Jumbotron>
    );
}

export default Masthead;
