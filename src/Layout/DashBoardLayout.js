import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { AuthContext } from '../Context/UserContext';
import useRole from '../Hooks/useRole';

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
                    <ul className="menu p-4 w-80  bg-slate-800 text-white">

                        {
                            role === 'Buyer' ?
                                <>
                                    <li className='border-b font-semibold'><Link to="/dashboard">My Orders</Link></li>
                                </>
                                :
                                role === 'Seller' ?
                                    <>
                                        <li className='border-b font-semibold'><Link to="/dashboard">My Products</Link></li>
                                        <li className='border-b font-semibold'><Link to="/dashboard/addproduct">Add A Product</Link></li>
                                    </>
                                    :
                                role === 'Admin' ?
                                    <>
                                        <li className='border-b font-semibold'><Link to="/dashboard">All Sellers</Link></li>
                                        <li className='border-b font-semibold'><Link to="/dashboard">All Buyers</Link></li>
                                        <li className='border-b font-semibold'><Link to="/dashboard">Reported Items</Link></li>
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