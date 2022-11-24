import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import useRole from '../../../Hooks/useRole';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [role] = useRole(user?.email);
    return (
        <div className=''>
            dashboard of a {role}
        </div>
    );
};

export default Dashboard;