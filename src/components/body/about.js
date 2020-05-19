import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {Container} from 'reactstrap';
import mastheadImage from '../../asset/mastheadBackground.jpg';
import './about.css'

function Timeline(props) {
  const [aboutsData, setAboutsData] = useState([]);

  useEffect(() => {
    axios.get('/abouts')
      .then(res => setAboutsData(res.data))
      .catch(err => console.error('GET /abouts' ,err))
  }, []);

  const timelineElementArr = aboutsData;

  return (<ul className="timeline">
    {
      timelineElementArr.map((node, idx) => {
        if (!node.lastNode)
          return (<li key={node.id} className={(
              idx % 2)
              ? "timeline-inverted"
              : ""}>
            <img src={node.thumbnail.url} className="rounded-circle timeline-image"/>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{node.month_year}</h4>
                <h4 className="subheading">{node.heading}</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{node.description}</p>
              </div>
            </div>
          </li>)
      })
    }
    <li>
      <div className="timeline-image">
        <h4>Be Part
          <br/>of Our<br/>Story!</h4>
      </div>
    </li>
  </ul>);
}

function About(props) {
  return (<section id="about" className="page-section">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">about</h2>
        <h3 className="section-subheading text-muted">{props.subheading}</h3>
      </div>
      <Timeline/>
    </Container>
  </section>);
}

export default About;
