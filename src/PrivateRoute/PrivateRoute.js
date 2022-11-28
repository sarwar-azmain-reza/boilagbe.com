import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loading/Loader';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {

        return <Loader></Loader>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;