import React from 'react';
import banner1 from '../assets/banner-1.jpg'
import banner2 from '../assets/banner-2.jpg'
import banner3 from '../assets/banner-3.jpg'
import banner4 from '../assets/banner-4.jpg'
import "animate.css"

const Banner = () => {
    return (
        <div className="carousel mt-10 font-macondo">
            <div id="slide1" className="carousel-item relative w-full  ">
                <img

                    src={banner4}
                    className="w-full " />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <h2 className="lg:text-7xl  text-white absolute   lg:top-2/3 left-10  font-macondo">Turning houses into homes, dreams into reality.</h2>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner2}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <h2 className="lg:text-5xl  text-black absolute lg:top-2/3 left-10 top-3 lg:left-28  ">Find your haven, where every corner feels like home</h2>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img
                    src={banner3}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <h2 className="lg:text-5xl  text-white absolute lg:top-10 left-14 lg:left-44  ">Your journey to the perfect home starts here.</h2>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img
                    src={banner1}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <h2 className="lg:text-5xl  text-black absolute lg:top-10 left-14 lg:left-44  ">Your journey to the perfect home starts here.</h2>
            </div>
        </div>
    );
};

export default Banner;