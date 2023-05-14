import React from 'react';

import Slider from '../components/Hero-Slider';

import CategoriesInfo from '../components/CategoriesInfo';
import Advertisement from '../components/Advertisement';
import Extrasection from '../components/Extrasection';
import WhyUs from '../components/WhyUs';
import HeroBanner from '../components/HeroBanner';





const Home = () => {
    return (
        <div className='lg:max-w-screen-xl mx-auto '>
            <Slider></Slider>
            <CategoriesInfo></CategoriesInfo>
            <Advertisement></Advertisement>
            <Extrasection></Extrasection>
            <HeroBanner></HeroBanner>
            <WhyUs></WhyUs>
            



        </div>
    );
};

export default Home;