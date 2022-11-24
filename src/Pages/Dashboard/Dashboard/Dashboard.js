import React, { useContext } from 'react';
import Loader from '../../../Components/Loading/Loader';
import { AuthContext } from '../../../Context/UserContext';
import useRole from '../../../Hooks/useRole';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [role, loading] = useRole(user?.email);
    return (
        <>
            {
                loading ?
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