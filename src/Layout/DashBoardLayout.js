import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
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
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {
                            role === 'Buyer' ?
                                <>
                                    <li><Link to="/dashboard">My Orders</Link></li>
                                </>
                                :
                                role === 'Seller' ?
                                    <>
                                        <li><Link to="/dashboard">My Products</Link></li>
                                        <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                                    </>
                                    :
                                role === 'Admin' ?
                                    <>
                                        <li><Link to="/dashboard">All Sellers</Link></li>
                                        <li><Link to="/dashboard">All Buyers</Link></li>
                                        <li><Link to="/dashboard">Reported Items</Link></li>
                                    </>
                                    :
                                    <>
                                    </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;