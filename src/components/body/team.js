import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import womanImage from '../../asset/woman.jpg';
import './team.css';

function Member(props) {
    let smd = props.smd || [];

    return (
        <div className="team-member">
            <img className="mx-auto rounded-circle" src={props.src}/>
            <h4>{props.name}</h4>
            <p className="text-muted">{props.role}</p>
            {
                    smd.map(socialMedia => 
                        <a key={socialMedia} className="btn btn-dark btn-social mx-2">
                            <FontAwesomeIcon className="fa-inverse fa-lg" icon={['fab', socialMedia]}/>
                        </a>
                    )
            }
        </div>
    );
}

function Team(props) {
    const [Members, setMembers] = useState("");

    const serverUrl = "http://localhost:1337";
    useEffect(() => {
        setTimeout(() => {
            axios.get(`${serverUrl}/teams`)
            .then((respond) => {
                let membersDataArr = respond.data;
                let MembersElement = membersDataArr.map(member => (
                        <Col key={member.id}>
                            <Member 
                            key={member.id}     
                            name={member.name} 
                            role={member.obj} 
                            src={member.picture ? serverUrl+member.picture.url : womanImage}/>
                        </Col>
                    )
                );
                setMembers(MembersElement); 
                console.log(membersDataArr);
            })
            .catch((err) => console.log(err))
        }, 3000)
    })
    return (
        <section id="team" className="page-section bg-light">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h2 className="section-subheading text-muted">something something</h2>
                </div>
                <Row>
                    {Members} 
                </Row>
            </Container>
        </section>
    );
}

export default Team;
