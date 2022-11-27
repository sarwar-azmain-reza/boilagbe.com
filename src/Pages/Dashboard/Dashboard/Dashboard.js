import React, { useContext } from 'react';
import Loader from '../../../Components/Loading/Loader';
import { AuthContext } from '../../../Context/UserContext';
import useRole from '../../../Hooks/useRole';
import AdminDashboard from './Admin/AdminDashboard';
import BuyerDashboard from './Buyer/BuyerDashboard';
import SellerDashboard from './Seller/SellerDashboard';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);

    if(isLoading){
        return <Loader></Loader>
    }
    if(role === 'Seller'){
        return <SellerDashboard></SellerDashboard>
    }
    else if(role === 'Admin'){
        return <AdminDashboard></AdminDashboard>
    }
    else if(role ==='Buyer'){
        return <BuyerDashboard></BuyerDashboard>
    }

};

export default Dashboard;