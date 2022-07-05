import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../Sign-In/popup.css';
import {Form,Button,NavLink} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import ClientDasbord from '../../ClientsDasbord/ClientDasbord';



const SignInPopup= (props) => {
  let navigate= useNavigate();


  const forDashbord=()=>{
    navigate("/clientsDasbord", {replace:true});
  };





  
  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner2">
        <button className='close-icon' onClick={()=>props.setTrigger(false)}>
        <FontAwesomeIcon  icon={faCircleXmark} />
        </button>
        {props.children}
      </div>
      <Form className='s'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={forDashbord} className='mt-3' variant="primary">Sign In</Button>{' '}
    </Form>

      
      
    </div>
  ): "";
};

export default SignInPopup;