import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

import './contact.css';

function ContactInput(props) {
  //Create a controlled Component by using value state
  const [value, setValue] = useState('');

  //When Form is submitted, reset the value to empty string
  useEffect(() => {
    setValue('');
  }, [props.submitted]);

  //Input onChange handler
  /* Change the value attribute value on user input */
  const handleChange = event => {
    setValue(event.target.value)
  };

  return (
    <FormGroup className={props.className}>
      <Input name={props.name} type={props.type} value={value} onChange={handleChange} placeholder={props.placeholder} required/>
    </FormGroup>
  );
}

function ContactForm(props) {
  //If the form has been submitted, forward the status to the ContactInput childre
  const [isSubmitted, setSubmit] = useState(false);

  //Form onSubmit handler
  /*
  * Show a popup
  * Toggle the submit state
  * Send a post request to /api/email-send with contactForm form-data
  */
  const handleSubmit = (event) => {
    alert('Email Sent');
    setSubmit(!isSubmitted);

    //Create an instance FormData of contactForm
    const formData = new FormData(event.target);

    //Send formData with content-type header: multipart/form-data
    axios.post('/api/email-send', formData)
      .then(res => console.log(res));

    event.preventDefault();
  };

  return (
    <Form id="contactForm" onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Col md="6">
          <ContactInput submitted={isSubmitted} name="name" type="text" placeholder="Your Name *"/>
          <ContactInput submitted={isSubmitted} name="email" type="email" placeholder="Your Email *"/>
          <ContactInput submitted={isSubmitted} name="phone" className="mb-md-0" type="text" placeholder="Your Number *"/>
        </Col>
        <Col md="6">
          <ContactInput submitted={isSubmitted} name="text" className="form-group-textarea mb-md-0" type="textarea"/>
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
