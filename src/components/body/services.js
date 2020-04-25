import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from 'reactstrap';

function Services(props) {
    return (
        <section id="services" className="page-section">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">There's no task that is too hard</h3>
                </div>
                <Row className="text-center">
                    {
                        [
                            {
                                icon: "scroll",
                                service: "Web Apps",
                                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.`
                            },
                            {
                                icon: "laptop",
                                service: "Responsive Design",
                                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.`
                            },
                            {
                                icon: "layer-group",
                                service: "MERN Stack",
                                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.`
                            },
                        ].map( elemObj => 
                            <Col key={elemObj.service} md="4">
                                <span className="fa-stack fa-4x">
                                    <FontAwesomeIcon className="fa-stack-2x" icon="circle"/>
                                    <FontAwesomeIcon className="fa-stack-1x fa-inverse" icon={elemObj.icon}/>
                                </span>
                                <h4 className="my-3">{elemObj.service}</h4>
                                <p className="text-muted">{elemObj.text}</p>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Services;
