import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../../Components/Loading/Loader';
import { AuthContext } from '../../../../Context/UserContext';
import useRole from '../../../../Hooks/useRole';
import useTitle from '../../../../Hooks/useTitle';

const AllBuyers = () => {

    useTitle('Admin|BoiLagbe');
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);

    const url = `https://boilagbe-com-server.vercel.app/admin/users?accountType=Buyer`;

    const { data: allCustomers = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['allCustomers'],
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

    if (isLoading) {
        return <Loader></Loader>
    }

    if (loading) {
        return <Loader></Loader>
    }

    const handleDelete = id => {
        console.log(id)
        fetch(`https://boilagbe-com-server.vercel.app/admin/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('boilagbeToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Deletion Successful.')
                }
            })
    }

    return (
        <div className='container mx-auto px-5 py-10'>
            {

                !allCustomers.length ?
                    <div className='text-3xl font-semibold text-red-500'>
                        Unfortunately BoiLagbe has no customers!
                    </div>
                    :

                    <div>
                        <h1 className='text-2xl font-semibold'>All Customers of BoiLagbe</h1><hr />
                        <div className='mt-10'>
                            <div className="overflow-x-auto">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allCustomers.map((customer, i) => <tr key={customer._id}>
                                                <th>{i + 1}</th>
                                                <td>{customer.name}</td>
                                                <td>{customer.email}</td>
                                                <td><button onClick={() => handleDelete(customer._id)} className='btn btn-sm text-white btn-error'>Delete</button></td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllBuyers;