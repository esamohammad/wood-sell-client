import React from 'react';
import useTitle from '../../../hooks/useTitle';

const AllSeller = () => {
    useTitle('AllSeller');
    
    return (
        <div>
            <h3 className="text-3xl mb-2 text-center font-bold mt-2 text-primary ">Seller Numbers <span className='text-secondary '></span></h3>
        </div>
    );
};

export default AllSeller;