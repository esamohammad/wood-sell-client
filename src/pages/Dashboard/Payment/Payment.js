import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData , useNavigation} from 'react-router-dom';

import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import Spinner from '../../../utils/Spinner';



//!stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);


const Payment = () => {
    const booking = useLoaderData();
    const { productName, price, category } = booking;
    const navigation = useNavigation();


    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h3 className="text-3xl mb-2 text-center font-bold mt-2 text-primary ">Payment for <span className='text-secondary '>{productName}</span></h3>


            <p className="text-lg text-center mb-20">Please pay <span className='mr-1 text-base font-black'>৳</span><strong>{price}</strong> for your product of {category} Category.</p>
            
            <p className="text-xl text-center mb-2 text-secondary font-bold">Your Payment Information is here...</p>
            






            <div className='w-full lg:w-3/5 mx-auto border-2 p-10 shadow-lg rounded-lg bg-gray-100 border-primary'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking={booking}
                    />
                </Elements>
            </div>




        </div>
    );
};

export default Payment;