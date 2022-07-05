import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap';
import NavbarZ from '../../navbar/NavbarZ';
import  './Register.css';



const Register = () => {
    let navigate= useNavigate();


    const moveDasbord=()=>{
      navigate("/clientsDasbord", {replace:true});
    };

    return (
        <div>
            <NavbarZ></NavbarZ>
            
            <div className="re-form">
                <div className="re-form-title">
                    <h1>Register Form</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            <Form className='mt-5'>
          <Row>
            <Col>
              <Form.Control type='text' required placeholder="First name" />
            </Col>
            <Col>
              <Form.Control type='text'required placeholder="Last name" />
            </Col>
          </Row><br />
          <Row>
            <Col>
              <Form.Control type='email'required placeholder="Your Email" />
            </Col>
            <Col>
              <Form.Control type='number'required placeholder="Number" />
            </Col>
          </Row><br />
          <Row>
            <Col>
              <Form.Control type='password' placeholder="Password" />
            </Col>
            <Col>
              <Form.Control type='password' placeholder="Confirm Password" />
            </Col>
          </Row>
        </Form>
        <Button onClick={moveDasbord} className='mt-4' variant="primary">Submit</Button>{' '}
            </div>
        </div>
    );
};

export default Register;