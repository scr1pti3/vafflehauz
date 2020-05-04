import React from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from 'reactstrap';

import './contact.css';

function Contact(props) {
    return (
        <section id="contact" className="page-section">
            <Container> 
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Something something</h3>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
