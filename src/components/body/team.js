import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';

import womanImage from '../../asset/woman.jpg';
import './team.css';

function Member(props) {
  const socialMedia = props.socialMedia || [];

  return (<div className="team-member">
    <img className="mx-auto rounded-circle" src={props.src}/>
    <h4>{props.name}</h4>
    <p className="text-muted">{props.role}</p>
    {
      socialMedia.map(socialMedia => <a key={socialMedia} className="btn btn-dark btn-social mx-2">
        <FontAwesomeIcon className="fa-inverse fa-lg" icon={['fab', socialMedia]}/>
      </a>)
    }
  </div>);
}

function Team(props) {
  const [Members, setMembers] = useState("");

  useEffect(() => {
    axios.get('/teams').then((response) => {
      let membersDataArr = response.data;
      let MembersElement = membersDataArr.map(member => (<Col key={member.id}>
        <Member key={member.id} name={member.name} role={member.role} src={member.picture
            ? member.picture.url
            : womanImage}/>
      </Col>));
      setMembers(MembersElement);
    }).catch((err) => console.error('GET /teams',err))
  }, []);

  return (<section id="team" className="page-section bg-light">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">{props.heading}</h2>
        <h2 className="section-subheading text-muted">{props.subheading}</h2>
      </div>
      <Row>
        {Members}
      </Row>
    </Container>
  </section>);
}

export default Team;
