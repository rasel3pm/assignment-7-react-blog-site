import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarZ from '../../navbar/NavbarZ';
import data from '../../../asset/data/BlogData.json';
import { Container } from 'react-bootstrap';
import Footer from '../../Footer/Footer';

const SingleBlog = () => {
    const {id} = useParams();
    const [some,SetSome]= useState(null)
    // const {picture,title,author,date,desc,id}=post
    useEffect(()=>{
        const fiterd=data.filter(some=>some.id==id)
        if(fiterd.length){
            SetSome(fiterd[0]);
        };

    },[]);
    return (
        <div>
            <NavbarZ></NavbarZ>
            {
                some !=null &&
                <Container>
                    <div className='single-blog-style'>
                        <img src={some.picture} alt="" />
                        <div className='single-blog-title'>
                            <h1>{some.title}</h1>
                        </div>
                        <p>{some.desc}</p>
                    </div>
                </Container>
            }
            <Footer></Footer>
        </div>
    );
};

export default SingleBlog;