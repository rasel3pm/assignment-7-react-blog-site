import React from 'react';
import NavbarZ from '../navbar/NavbarZ';
import {Form,Button,Row,Col} from 'react-bootstrap';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <NavbarZ></NavbarZ>


            <div className="contact-section">
            <Form className='mt-5'>
          <Row>
            <Col>
              <Form.Control type='text'required placeholder="First name" />
            </Col>
            <Col>
              <Form.Control type='text'required placeholder="Last name" />
            </Col>
          </Row><br />
          <Row>
            <Col>
              <Form.Control type='email' placeholder="Your Email" />
            </Col>
          </Row><br />
          <Row>
            <Col>
            <Form.Control textarea name="" id="" cols="30" rows="10"></Form.Control>
            </Col>
          </Row>
          <Button className='mt-4' variant="primary">Submit</Button>{' '}
            </Form>
            </div>
            <Footer></Footer>
      </div>
    );
};

export default Contact;