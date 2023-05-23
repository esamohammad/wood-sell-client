import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../utils/Spinner';
import { Link } from 'react-router-dom';
const MyOrders = () => {
    const { user } = useContext(AuthContext);


    //!Email quary for myOrders
    const url = `http://localhost:5000/bookings?email=${user?.email}`;



    //!Tanstack quary for myOrders
    const { data: bookings = [], isLoading } = useQuery({
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





    if (isLoading) {
        return <Spinner></Spinner>
    }




    return (

        <div>
            <h3 className="text-3xl mb-5 text-center font-bold mt-2 text-primary ">My Orders: {bookings.length} </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-base'>SL.</th>
                            <th className='text-base'>Product Image</th>
                            <th className='text-base'>Product Name</th>
                            <th className='text-base'>Category</th>
                            <th className='text-base'>price</th>
                            <th className='text-base'>payment</th>
                            <th className='text-base'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&

                            bookings?.map((booking, i) => <tr key={booking._id}>
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
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button className='btn btn-primary  hover:bg-secondary  text-white btn-xs'>Pay Now</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-primary'>Paid</span>
                                    }

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