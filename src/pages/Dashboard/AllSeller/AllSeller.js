import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../utils/Spinner';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AllSeller = () => {
    useTitle('AllSeller');
    
    // !=================================
    // !React quary- sellers data get or fetch
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/role?role=seller');
            const data = await res.json();
            return data;
        }
    });



    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h3 className="text-3xl mb-2 text-center font-bold mt-2 text-primary ">Buyer Numbers: {sellers.length}<span className='text-secondary '></span></h3>
            {/* //!table start */}
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className='text-base'>SL.</th>
                        <th className='text-base'>Image</th>
                        <th className='text-base'>Name</th>
                        <th className='text-base'>Email</th>
                        <th className='text-base'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) => <tr key={seller._id}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={seller.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>


                            <td>
                                <button className='btn bg-red-500 hover:bg-red-700 text-white btn-xs'>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;