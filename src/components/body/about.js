import React from 'react';
import {
    Container,
} from 'reactstrap';
import mastheadImage from '../../asset/mastheadBackground.jpg';
import './about.css'

function Timeline(props) {
    const timelineElementArr = [
        {
            date: "August 2019",
            heading: "Our Humble Beginnings",
        },
        {
            date: "April 2020",
            heading: "A New Chapter"
        }
    ];

    timelineElementArr.push({
        lastNode: true,
    });

    return (
        <ul className="timeline">
            {
                timelineElementArr.map( (node, idx) => {
                    if(!node.lastNode) return (
                        <li key={idx} className={(idx%2) ? "timeline-inverted" : ""}>
                            <img src={mastheadImage} className="rounded-circle timeline-image"/>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>{node.date}</h4>
                                    <h4 className="subheading">{node.heading}</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                                    </p>
                                </div>
                            </div>
                        </li>
                    ); else return (
                        <li key={idx}>
                            <div className="timeline-image">
                                <h4>Be Part <br/>of Our<br/>Story!</h4>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
}

function About(props) {
    return (
        <section id="about" className="page-section">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Our marks on history</h3>
                </div>
                <Timeline/>
            </Container>
        </section>
    );
}

export default About;
