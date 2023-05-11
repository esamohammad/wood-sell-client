import React from 'react';

import Slider from '../components/Hero-Slider';
import ExtraSection from '../components/Extrasection';
import WhyUs from '../components/WhyUs';
import Categories from '../components/Categories';

import Spinner from '../utils/Spinner';

const Home = () => {
    return (
        <div className='lg:max-w-screen-xl mx-auto '>
            <Slider></Slider>
            <Categories></Categories>
           
            <ExtraSection></ExtraSection>
            <WhyUs></WhyUs>
            {/* <Spinner></Spinner> */}
        </div>
    );
};

export default Home;