import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';


const ExtraSection = () => {
    return (
        <div className='bg-accent py-5'>
            <div className='lg:px-20 grid lg:grid-cols-2 gap-y-5 '>
                <div>
                    <Player
                        src='https://assets6.lottiefiles.com/private_files/lf30_phcng6qv.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '30em', width: '40em' }}
                    />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-secondary text-4xl font-bold '>Now this time to be<br /> <span className='text-primary'> Buyer or Seller</span>...!!</h1>
                    <div className='py-3'>
                        <h3 className=' lg:ml-20 text-black font-semibold text-2xl'>Sell What You Have,</h3>
                        <h3 className='lg:mr-20 text-black font-semibold text-2xl'>Buy What You Need!</h3>
                        <h3 className='lg:ml-20  font-bold text-3xl text-primary '>We Care Your Money.</h3>
                        <div className='mx-auto'>
                            <button className='btn btn-outline btn-secondary w-full font-bold mt-5'> <Link to="/allproducts">SHOW All Products</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;

//! https://lottiefiles.com/
// https://lottiefiles.com/search?q=furniture&category=animations