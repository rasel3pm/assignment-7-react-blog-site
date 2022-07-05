import React from 'react';

import {Link} from 'react-router-dom';


const BlogCard = ({post}) => {



    const {picture,title,author,date,desc,id}=post
    return (
        <div className='blogContainer'>
            <div className='cards'>
                <div className='cardimg'>
                    <img className='pic' src={picture} alt={title} />
                </div>
                <div className='cardtitle'>
                    <h5>{title}</h5>
                </div>
                <div className="autorDetails">
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
                <div className="button">
                    <Link className='btn' to={`/sinPost/${id}`}>About More</Link>
                </div>
                

            </div>
        </div>
    );
};

export default BlogCard;