import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loading/Loader';
import { AuthContext } from '../Context/UserContext';
import useRole from '../Hooks/useRole';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);
    const location = useLocation();
    // console.log(role);
    if (loading || isLoading) {
        return <Loader ></Loader>
    }

    if (user && role === 'Admin') {
        return children;
    }
    if(user && role !=='Admin'){
        return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;