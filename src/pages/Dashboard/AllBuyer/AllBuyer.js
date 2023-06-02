import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../utils/Spinner';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AllBuyer = () => {
    useTitle('AllBuyer');

    // !=================================
    // !React quary- buyers data get or fetch
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/role?role=buyer');
            const data = await res.json();
            return data;
        }
    });



    if (isLoading) {
        return <Spinner></Spinner>
    }


    return (
        <div>
            <h3 className="text-3xl mb-2 text-center font-bold mt-2 text-primary ">Buyer Numbers: {buyers.length}<span className='text-secondary '></span></h3>
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
                        buyers.map((buyer, i) => <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={buyer.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            

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

export default AllBuyer;