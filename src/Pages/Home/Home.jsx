import React from 'react';
import Navbar from '../../Components/Navbar';
import Sales from '../../Components/Sales';
import Banner from '../../Components/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Sales></Sales>
            <Banner></Banner>
        </div>
    );
};

export default Home;