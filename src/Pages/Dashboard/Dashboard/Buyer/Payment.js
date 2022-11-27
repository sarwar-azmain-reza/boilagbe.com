import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../../../Components/Loading/Loader';
import { AuthContext } from '../../../../Context/UserContext';
import useRole from '../../../../Hooks/useRole';
import useTitle from '../../../../Hooks/useTitle';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    useTitle('Payment|BoiLagbe');
    const bookingData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='border container mx-auto px-5 py-10'>
            <h1 className="text-3xl font-semibold">Payment for {bookingData.productName}</h1>
            <p className='text-lg font-semibold'>Pay {bookingData.sellingPrice} BDT to complete order</p><hr />
            <div className='mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        bookingData={bookingData}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;