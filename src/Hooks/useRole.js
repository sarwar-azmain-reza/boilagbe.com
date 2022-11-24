import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [role,setRole] = useState('');
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRole(data.accountType);
                    setLoading(false);
                })
        }
    }, [email])
    return [role, loading]
};

export default useRole;