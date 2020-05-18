import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import './footer.css';

function Footer(props) {
  return (
    <footer className="py-4">
      <Container>
        <Row className="align-items-center">
          <Col lg="4" className="text-lg-left">Copyright © Vafflehauz 2020</Col>
          <Col lg="4" className="my-3 my-lg-0"></Col>
          <Col lg="4" className="text-lg-right">
            <a className="mr-3" href="#!">Privacy Policy</a>
            <a href="#!">Terms of Use</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
