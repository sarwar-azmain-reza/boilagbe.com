import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../../Components/Loading/Loader';
import { AuthContext } from '../../../../Context/UserContext';
import useRole from '../../../../Hooks/useRole';
import useTitle from '../../../../Hooks/useTitle';

const AdminDashboard = () => {
    useTitle('Admin|BoiLagbe');
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);

    const url = `https://boilagbe-com-server.vercel.app/admin/users?accountType=Seller`;

    const { data: allSellers = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('boilagbeToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleVerification = id => {
        fetch(`https://boilagbe-com-server.vercel.app/admin/users/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('boilagbeToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Verified Successfully..');
                }
            })
    }
    const handleDeleteSeller = id => {
        console.log(id);
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='container mx-auto px-5 py-10'>
            <h1 className='text-2xl font-semibold'>All Sellers of BoiLagbe</h1><hr />
            <div className='mt-10'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Verification</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSellers.map((seller, i) => <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>
                                        {!seller?.isVerified ? <button onClick={() => handleVerification(seller._id)} className='btn btn-sm text-white btn-info'>Verify</button> : <p><CheckBadgeIcon className='h-8 text-info' /></p>}
                                    </td>
                                    <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-sm text-white btn-error'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;