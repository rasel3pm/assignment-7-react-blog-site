import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket} from '@fortawesome/free-solid-svg-icons'
import './subscribe.css';

const Subscribe = () => {
    return (
        <div>
            <div className="subscribe-inner">
                <div className="subscribe-title">
                    <div className="subscribe-icon">
                        <FontAwesomeIcon className='fa-rocket' icon={faRocket} />
                    </div>
                    <h1>Subscribe Our Newslater</h1>
                </div>

                <div className="subscribe-input">
                    <Row>
                        <Col>
                            <Form.Control type='email' placeholder="Your Email" />
                        </Col>
                    </Row>
                    <Button className='mt-4' variant="primary">Submit</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Subscribe;