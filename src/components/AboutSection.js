import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import CustomButton from './CustomButton';

const AboutSection = () => {
    return (
        <div className=' lg:px-20 my-20 '>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className='flex flex-col justify-center items-center order-last lg:order-first'>
                    <h2 className='text-2xl text-black font-semibold'>Are You Looking For <br /> <span className='text-4xl text-secondary font-bold'>Refurbish Furniture?</span></h2>
                    <p className='mb-5 text-black text-xl'>We got exactly what you need!</p>
                    <CustomButton>Find Out More</CustomButton>
                </div>
                <div>

                    {/* <img src={bannergif} alt="" /> */}
                    <Player
                        src='https://assets5.lottiefiles.com/packages/lf20_4inZAv2rBx.json'
                        className="player"
                        loop
                        autoplay
                    // style={{ height: '23em', width: '23em' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

// !https://lottiefiles.com/search?q=furniture&category=animations

//!search for animations---------------------------------------