import React from 'react';
import Subber from '../componets/Subber/Subber';
import Header from '../componets/Header/Header';
import Homeslider from '../componets/Homeslider/Homeslider';
import About from '../componets/About/About';
import What from '../componets/What/What';
import Recent from '../componets/Recent/Recent';
import { Outlet } from 'react-router-dom';
import Backimg from '../componets/Backimg/Backimg';
import Team from '../componets/Team/Team';
import Blog from '../componets/Blog/Blog';
import Footer from '../componets/Footer/Footer';


const Home = () => {
    return (
        <>
            <Subber></Subber>
            <Header></Header>
            <Homeslider></Homeslider>
            <About></About>
            <What></What>
            <Recent></Recent>
            <Outlet></Outlet>
            <Backimg></Backimg>
            <Team></Team>
            <Blog></Blog>
            <Footer></Footer>
        </>
    );
};

export default Home;