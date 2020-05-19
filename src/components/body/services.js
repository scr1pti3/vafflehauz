import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from 'reactstrap';

function Services(props) {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
     axios('/services')
      .then(res => setServicesData(res.data))
      .catch(err => console.error('GET /services', err));
  }, []);

  const services = servicesData;

  return (<section id="services" className="page-section">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">{props.subheading}</h3>
      </div>
      <Row className="text-center">
        {services.map(node => <Col key={node.id} md>
          <span className="fa-stack fa-4x">
            <FontAwesomeIcon className="fa-stack-2x" icon="circle"/>
            <FontAwesomeIcon className="fa-stack-1x fa-inverse" icon={node.icon}/>
          </span>
          <h4 className="my-3">{node.service}</h4>
          <p className="text-muted">{node.description}</p>
        </Col>)
        }
      </Row>
    </Container>
  </section>);
}

export default Services;
