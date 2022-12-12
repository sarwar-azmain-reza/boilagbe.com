import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../../Components/Loading/Loader';
import { AuthContext } from '../../../../Context/UserContext';
import useRole from '../../../../Hooks/useRole';
import useTitle from '../../../../Hooks/useTitle';

const ReportedItems = () => {

    useTitle('Reported Items|BoiLagbe');
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);

    const url = `https://boilagbe-com-server.vercel.app/products/report`;

    const { data: reportedItems = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['reportedItems'],
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
        fetch(`https://boilagbe-com-server.vercel.app/products/${id}`, {
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

                !reportedItems.length ?
                    <div className='text-3xl font-semibold text-red-500'>
                        No Reported Items!
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
                                            <th>Seller Name</th>
                                            <th>Report Reason</th>
                                            <th>Reported By</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reportedItems.map((item, i) => <tr key={item._id}>
                                                <th>{i + 1}</th>
                                                <td>{item.productName}</td>
                                                <td>{item.sellerName}</td>
                                                <td>{item?.reportReason}</td>
                                                <td>{item?.reportedBy}</td>
                                                <td><button onClick={() => handleDelete(item._id)} className='btn btn-sm text-white btn-error'>Delete</button></td>
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

export default ReportedItems;