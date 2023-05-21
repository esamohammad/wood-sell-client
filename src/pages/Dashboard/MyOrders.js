import React, { useContext } from 'react';
import { AuthContext } from './../../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';
const MyOrders = () => {
    const { user } = useContext(AuthContext);


    //!Email quary for myOrders
    const url = `http://localhost:5000/bookings?email=${user?.email}`;



    //!Tanstack quary for myOrders
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, { 
                //!jwt verification
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (

        <div>
            <h3 className="text-3xl mb-5 text-center font-bold mt-2 ">My Orders: {bookings.length} </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th> 

                                <td> 
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>{booking.productName}</td> 

                                <td>{booking.category}</td>
                                <td><span className='mr-1 text-base font-black'>৳</span>{booking.price}</td>
                                <td>
                                    <button className='btn btn-primary btn-sm hover:bg-secondary  text-white'>Pay Now</button>
                                </td>
                                <td>
                                    <button className='btn bg-red-500 hover:bg-red-700 text-white btn-xs'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;