import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Sales from '../../Components/Sales';
import Banner from '../../Components/Banner';
import "animate.css"
import Estate from './Estate';

const Home = () => {
    const [estate,setEstate]=useState([]);
    useEffect(()=>{
        fetch('estate.json')
        .then(res=>res.json())
        .then(data=>setEstate(data))
    },[])
    return (
        <div>
            
            <Sales></Sales>
            <Banner></Banner>
            <h2 className="mt-10 mb-10 text-center text-4xl font-macondo animate__animated animate__bounceInDown">Explore Our Objects Build Your Own Home</h2>
           <div className='grid lg:grid-cols-3 gap-4 mb-10'>
            {
                estate.map(aEstate=><Estate estate={aEstate} key={aEstate.id}></Estate>)
            }
           </div>
        </div>
    );
};

export default Home;