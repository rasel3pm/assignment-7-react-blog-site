import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Sign-Up/SignUp.css';
import {Form,Button,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const SignUpPopup = (props) => {
  let navigate= useNavigate();


  const forDashbord=()=>{
    navigate("/clientsDasbord", {replace:true});
  };



  return (props.trigger) ? (
    <div >
      <div className="popup2">
        <div className='btns'>
        <button className='close-icon' onClick={() => props.setTrigger(false)}>
        <FontAwesomeIcon  icon={faCircleXmark} />
        </button>
        </div>
        {props.children}


        <Form className='mt-5'>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row><br />
          <Row>
            <Col>
              <Form.Control type='email' placeholder="Your Email" />
            </Col>
            <Col>
              <Form.Control type='number' placeholder="Number" />
            </Col>
          </Row><br />
          <Row>
            <Col>
              <Form.Control type='password' placeholder="Password" />
            </Col>
          </Row>
        </Form>
        <Button onClick={forDashbord} className='mt-4' variant="primary">Submit</Button>{' '}
      </div>

    </div>
  ) : "";
};

export default SignUpPopup;