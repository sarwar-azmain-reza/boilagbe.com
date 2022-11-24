import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Components/Loading/Loader';
import { AuthContext } from '../../../Context/UserContext';
import useRole from '../../../Hooks/useRole';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);

    const url = `https://boilagbe-com-server.vercel.app/products?email=${user?.email}`;

    const { data: myproducts = [], refetch } = useQuery({
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

    const handleStatus = id => {
        fetch(`https://boilagbe-com-server.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('boilagbeToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated Status Successful.')
                    refetch();
                }
            })
    }

    return (
        <div className='border container mx-auto px-5 py-10'>
            {
                isLoading ?
                    <Loader></Loader>
                    :

                    <div className=''>
                        <h1 className='text-2xl font-semibold'>All Products of {role} {user?.displayName}</h1><hr />
                        <div className='mt-10'>
                            <div className="overflow-x-auto">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Advertising</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myproducts.map((product, i) => <tr key={product._id}>
                                                <th>{i + 1}</th>
                                                <td>{product.productName}</td>
                                                <td>{product.sellingPrice}</td>
                                                <td><button onClick={() => handleStatus(product._id)} className={` text-white btn-sm ${product?.status !== 'Sold' ? 'btn btn-info' : 'disabled bg-slate-500 rounded-md cursor-not-allowed'} `}>{product?.status ? `${product?.status}` : 'Available'}</button></td>
                                                <td>{product?.status !== 'Sold' && <button className='btn btn-sm btn-error disabled'>Advertise</button>}</td>
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

export default Dashboard;