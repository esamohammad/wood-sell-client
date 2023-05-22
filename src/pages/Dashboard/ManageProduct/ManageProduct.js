import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../utils/Spinner';





const ManageProduct = () => {

    // !================================================
    // !React useQuary
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    // !Loader spinner
    if (isLoading) {
        return <Spinner />;
    }






    return (
        <div>
            <h3 className="text-3xl mb-5 text-center font-bold mt-2 text-primary ">Manage Products: {products?.length} </h3>



            {/* //!M.Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-base'>SL.</th>
                            <th className='text-base'>Product Image</th>
                            <th className='text-base'>Product Name</th>
                            
                            <th className='text-base'>Resell Price</th>
                            <th className='text-base'>Location</th>
                            <th className='text-base'>Category</th>
                            <th className='text-base'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p, i) => <tr key={p._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-16 h-16">
                                        <img src={p.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{p.name}</td>
                                
                                <td><span className='mr-1 text-base font-black'>৳</span>{p.resalePrice}</td>
                                <td>{p.location}</td>
                                <td>{p.category}</td>
                                <td><button className="btn bg-red-500 hover:bg-red-700 text-white btn-xs">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

















        </div>
    );
};

export default ManageProduct;