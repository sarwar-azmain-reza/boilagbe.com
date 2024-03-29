import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../../Components/Loading/Loader';
import { AuthContext } from '../../../../Context/UserContext';
import useRole from '../../../../Hooks/useRole';
import useTitle from '../../../../Hooks/useTitle';

const BuyerDashboard = () => {
    useTitle('Dashboard')
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);
    const url = `https://boilagbe-com-server.vercel.app/booking?email=${user?.email}`;

    const { data: mybookings = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['myproducts', user?.email],
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
    return (
        <div className='border container mx-auto px-5 py-10'>
            {

                !mybookings.length ?
                    <div className='text-3xl font-semibold text-red-500'>
                        You Have No Orders!
                    </div>
                    :
                    <div className=''>
                        <h1 className='text-2xl font-semibold'>All Orders of {user?.displayName}</h1><hr />
                        <div className='mt-10'>
                            <div className="overflow-x-auto">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mybookings.map((booking, i) => <tr key={booking._id}>
                                                <th>{i + 1}</th>
                                                <td><img src={booking.image} alt="" className='h-8' /></td>
                                                <td>{booking.productName}</td>
                                                <td>{booking.sellingPrice} BDT</td>
                                                <td>
                                                    {!booking?.paid && <Link to={`/dashboard/payment/${booking._id}`} className='btn btn-sm btn-info text-white'>Pay</Link>}
                                                    {booking?.paid && <p className='text-green-500'>Paid</p>}
                                                </td>

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

export default BuyerDashboard;