import React, { useEffect, useState } from 'react';
import data from '../../../asset/data/BlogData.json';
import BlogCard from './BlogCard';
import './blog.css';
import SideBar from '../Sidebar/SideBar';
import RelatedPost from '../Sidebar/SideBar-rel-post/RelatedPost';

const Blogs = () => {

    return (
        <div className='post-container'>
            <h1>Latest Posts</h1>
            <div className="submain">
                <div className="all">
                    
                    {
                        data.slice(0,6).map(post=> <BlogCard post={post} key={post.id}/>)
                    }
                </div>
                <div className='sidebar'>
                    <SideBar></SideBar>
                </div>
            </div>

        </div>
    );
};

export default Blogs;