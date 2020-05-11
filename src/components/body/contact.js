import React from 'react';
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';

import './contact.css';

function ContactInput(props) {
  return (
    <FormGroup className={props.className}>
      <Input name={props.name} type={props.type} placeholder={props.placeholder} required/>
    </FormGroup>
  );
}
function ContactForm(props) {
  return (
    <Form id="contactForm" action="http://localhost:1337/email-send" method="post">
      <Row className="mb-5">
        <Col md="6">
          <ContactInput name="name" type="text" placeholder="Your Name *"/>
          <ContactInput name="to" type="email" placeholder="Your Email *"/>
          <ContactInput name="phone" className="mb-md-0" type="text" placeholder="Your Number *"/>
        </Col>
        <Col md="6">
          <ContactInput name="text" className="form-group-textarea mb-md-0" type="textarea"/>
        </Col>
      </Row>
      <div className="text-center">
        <Button type="submit" size="xl" className="text-uppercase">Send Message</Button>
      </div>
    </Form>
  );
}

function Contact(props) {
  return (
    <section id="contact" className="page-section">
      <Container>
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Something something</h3>
        </div>
        <ContactForm/>
      </Container>
    </section>
  );
}

export default Contact;
