import React from 'react';
import NavbarZ from '../../navbar/NavbarZ';
import './layout.css';

const Layout = ({ children }) => {
    return ( < div >
        <NavbarZ> </NavbarZ> 
        <div className = 'layoutcontainer'>
             {children} 
        </div>

        </div>
    );
};

export default Layout;