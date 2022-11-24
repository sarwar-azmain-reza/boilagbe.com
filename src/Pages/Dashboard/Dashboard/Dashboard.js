import React, { useContext } from 'react';
import Loader from '../../../Components/Loading/Loader';
import { AuthContext } from '../../../Context/UserContext';
import useRole from '../../../Hooks/useRole';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);
    return (
        <>
            {
                isLoading ?
                    <Loader></Loader>
                    :

                    <div className=''>
                        dashboard of a {role}
                    </div>
            }
        </>
    );
};

export default Dashboard;