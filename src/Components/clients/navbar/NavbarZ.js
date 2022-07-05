import React, { useState } from 'react';
import {Navbar,Nav,Container,Button} from  'react-bootstrap'
import {NavLink} from  'react-router-dom'
import Logo from '../Common/Logo/Logo';
import SignInPopup from '../PopUp/Sign-In/SignInPopup';
import SignUpPopup from '../PopUp/Sign-Up/SignUpPopup';
import style from './navbarZ.module.css'
import { useNavigate } from 'react-router-dom';

const NavbarZ = () => {
    const [inPopup,SetInPopup]=useState(false)

    let navigate= useNavigate();


    const RegisterPa=()=>{
      navigate("/RegisterPa", {replace:true});
    };



    return (
        <div>
            <Navbar expand="lg" className={style.navs}>
                <Container >
                        <Logo></Logo>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">

                            <Nav
                                className="mx-auto my-2 my-lg-0"
                                style={{ maxHeight: '200px'}}
                                navbarScroll
                            >
                                <NavLink className={({isActive})=> isActive? style.isActive:style.notActive } to="/" >Home</NavLink>
                                <NavLink className={({isActive})=> isActive? style.isActive:style.notActive } to="/ourteam" >Our Team</NavLink>
                                <NavLink className={({isActive})=> isActive? style.isActive:style.notActive } to="/contact" >Contact</NavLink>
                            </Nav>

                            <div className='si-up-in'>
                                <button className='SignIn' onClick={()=> SetInPopup(true)}>Sign In</button>
                                <SignInPopup trigger={inPopup} setTrigger={SetInPopup}></SignInPopup>


                                
                                <button className='SignUp' onClick={RegisterPa}>Sign Up</button>
                            </div>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarZ;