import React from 'react';
import './sidebar.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <h5>Catagory</h5>
            <ul>
                <li>Latest News</li>
                <li>Fitness</li>
                <li>Life Style</li>
                <li>World Nature</li>
                <li>Taxpayers fall </li>
            </ul>
            <div className="related-post">
            </div>
        </div>
    );
};

export default SideBar;