import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [role,setRole] = useState('');
    const [isLoading,setLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://boilagbe-com-server.vercel.app/admin/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setRole(data.accountType);
                    setLoading(false);
                })
        }
    }, [email])
    return [role, isLoading]
};

export default useRole;