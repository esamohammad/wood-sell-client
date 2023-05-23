import React, { useContext } from 'react';
import Navbar from './../components/Navbar'
import { Link, Outlet } from 'react-router-dom';
import { FaUsers, FaTasks, FaRegPlusSquare, FaDollyFlatbed } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';


const DashboardLayout = () => {

    //!Admin investigation
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li className=' text-lg font-bold text-secondary-focus mb-0.5'><Link to='/dashboard'> <span className='text-indigo-600 '><FaTasks /></span> My Orders </Link></li>
                        {
                            isAdmin && <>
                                <li className=' text-lg font-bold text-secondary-focus mb-0.5'><Link to='/dashboard/allusers'> <span className='text-indigo-600 '><FaUsers /></span> All Users </Link></li>


                                <li className=' text-lg font-bold text-secondary-focus mb-0.5'><Link to="/dashboard/addproduct"><span className='text-indigo-600 '><FaRegPlusSquare /></span>Add Product</Link></li>

                                <li className=' text-lg font-bold text-secondary-focus mb-0.5'><Link to="/dashboard/manageproducts"><span className='text-indigo-600 '><FaDollyFlatbed /></span>Manage Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;