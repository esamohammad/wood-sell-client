import React, { useEffect, useState } from 'react';
import AdvertisementCard from './AdvertisementCard';
import { useNavigation } from 'react-router-dom';
import Spinner from '../utils/Spinner';

const Advertisement = () => {
    const navigation = useNavigation()


    const [advertise, setAdvertise] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => setAdvertise(data))
    }, [])




    if (navigation.state === 'loading') {
        return <Spinner></Spinner>
    }
    return (
        <div>  
            <div className='my-5 shadow-lg bg-blue-200 rounded-md'>
                <marquee className='text-2xl text-black p-4 ' > A huge Discount is going for all of this products. don't be late..!! grave the Opportunity..!!</marquee>
            </div>
            
            
            
            <h1 className='text-4xl text-center text-secondary font-bold my-5'>Advertisement</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-10'>
                {
                    advertise.map((add) => <AdvertisementCard
                        key={add.id}
                        add={add}></AdvertisementCard>)
                }
            </div>
            
        </div>
    );
};

export default Advertisement;