import React from 'react';
import NavbarZ from '../navbar/NavbarZ';
import './clientsDasbord.css';

const ClientDasbord = () => {
    return (
        <div className='clientDasbord'>
            <NavbarZ></NavbarZ>
            <div className="clientDasbord-inner">
                <div className="navarea">
                    <div className="profile">
                        <h4>User Name</h4>
                    </div>
                    <div className="profile-service">
                        <ul>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">Courses</a>
                            </li>
                            <li>
                                <a href="#">Service</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="client-info">
                <h4>User Info</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque assumenda sit ipsum incidunt hic vitae sed odio fugit ea dicta, deserunt quisquam voluptatum? Nam quos esse similique repudiandae accusantium voluptate.</p>
                </div>
            </div>
        </div>
    );
};

export default ClientDasbord;