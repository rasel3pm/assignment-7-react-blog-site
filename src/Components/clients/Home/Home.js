import React from 'react';
import Layout from '../Common/Layout/Layout';
import Footer from '../Footer/Footer';
import PopUp from '../PopUp/Sign-In/SignInPopup';
import Blogs from './Blogs/Blogs';
import SingleBlog from './Blogs/SingleBlog';

import HeroAdd from './HeroSection/Hero_add/HeroAdd';
import Subscribe from './Subscribe/Subscribe';





const Home = () => {
    return (<div>
                <Layout>
                    <HeroAdd></HeroAdd>
                    <Blogs></Blogs>
                    <Subscribe></Subscribe>
                </Layout>
                <Footer></Footer>
        </div>
    );
};

export default Home;