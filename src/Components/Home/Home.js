import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import TopNavbar from './TopNavbar/TopNavbar';
import UpperTopNavbar from './UpperTopNavbar/UpperTopNavbar';

const Home = () => {
    return (
        <div>
            <UpperTopNavbar></UpperTopNavbar>
            <TopNavbar></TopNavbar>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;