import React from 'react';
import Logo from '../Common/Logo/Logo';
import './footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-brand">
                    <div><Logo></Logo></div>

                    <p>© 2022, All Rights Reserved.</p>
                </div>
                <div className="Quick-Links">
                    <h6>Quick Links</h6>

                    <ul>
                        <li>
                            <a href="#">Advertise with us</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="Legal-Stuff">
                    <h6>Legal Stuff</h6>

                    <ul>
                        <li>
                            <a href="#">Advertise with us</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="Social-Media">
                    <h6>Social Media</h6>

                    <ul>
                        <li>
                            <a href="#">Advertise with us</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;