import React from 'react';

import Slider from '../components/Hero-Slider';
import ExtraSection from '../components/Extrasection';
import WhyUs from '../components/WhyUs';
import Categories from '../components/Categories';


const Home = () => {
    return (
        <div className='lg:max-w-screen-xl mx-auto '>
            <Slider></Slider>
            <Categories></Categories>
            <ExtraSection></ExtraSection>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;