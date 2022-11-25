import React, { useContext } from 'react';
import Loader from '../../../../Components/Loading/Loader';
import { AuthContext } from '../../../../Context/UserContext';
import useRole from '../../../../Hooks/useRole';

const BuyerDashboard = () => {
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);
    
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            dashboard of a {role}
        </div>
    );
};

export default BuyerDashboard;