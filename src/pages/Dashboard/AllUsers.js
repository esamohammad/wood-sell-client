import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../utils/Spinner';
// import { FcPortraitMode, FcTodoList } from "react-icons/fc";











const AllUsers = () => {

    // !=================================
    // !React quary- users data get or fetch
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });



    if (isLoading) {
        return <Spinner></Spinner>
    }





    return (
        <div>
            <h3 className="text-3xl mb-5 text-center font-bold mt-2 text-primary ">All Users: {users.length} </h3>

            {/* //!table start */}
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className='text-base'>SL.</th>
                        <th className='text-base'>Image</th>
                        <th className='text-base'>Name</th>
                        <th className='text-base'>Email</th>
                        <th className='text-base'>Admin Action</th>
                        <th className='text-base'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="" alt="Avatar" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-primary btn-sm hover:bg-secondary  text-white'>Make Admin</button>
                            </td>
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

export default AllUsers;
