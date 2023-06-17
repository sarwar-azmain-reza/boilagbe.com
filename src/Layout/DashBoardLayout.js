import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { AuthContext } from '../Context/UserContext';
import useRole from '../Hooks/useRole';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ImBooks } from 'react-icons/im';
import { BiListPlus } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { GoReport } from 'react-icons/go';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [role] = useRole(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-slate-100 text-gray-600">

                        {
                            role === 'Buyer' ?
                                <>
                                    <li className='border-b font-semibold'><Link to="/dashboard"><ShoppingBagIcon className='h-7' />My Orders</Link></li>
                                </>
                                :
                                role === 'Seller' ?
                                    <>
                                        <li className='border-b font-semibold'><Link to="/dashboard" ><ImBooks className='text-2xl' />My Products</Link></li>
                                        <li className='border-b font-semibold'><Link to="/dashboard/addproduct"><BiListPlus className='text-2xl' />Add A Product</Link></li>
                                    </>
                                    :
                                    role === 'Admin' ?
                                        <>
                                            <li className='border-b font-semibold'><Link to="/dashboard"><FiUsers className='text-2xl' /> All Sellers</Link></li>
                                            <li className='border-b font-semibold'><Link to="/dashboard/allbuyers"><FiUsers className='text-2xl' /> All Buyers</Link></li>
                                            <li className='border-b font-semibold'><Link to="/dashboard/reporteditems"><GoReport className='text-2xl' /> Reported Items</Link></li>
                                        </>
                                        :
                                        <>
                                        </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;