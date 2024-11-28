import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Banner></Banner>
            <div className="text-3xl text-center">Our brand</div>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;