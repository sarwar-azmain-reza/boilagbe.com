import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ productInfo, setProductInfo, user }) => {
    const { _id, productName, image, sellingPrice } = productInfo;
    const [loading, setLoading] = useState(false);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const buyerPhone = form.buyerPhone.value;
        const buyerLocation = form.buyerLocation.value;
        const booking = {
            productId: _id,
            productName,
            sellingPrice,
            image,
            buyerName,
            buyerEmail,
            buyerPhone,
            buyerLocation
        }
        console.log(booking);
        setLoading(true);
        fetch('https://boilagbe-com-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    setLoading(false);
                    setProductInfo(null)
                    toast.success('Product Booked successfully');     
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking}>
                        <div className="form-control mt-2 grid grid-cols-1 gap-3">
                            <input type="text" name='buyerName' placeholder="Type here" value={user?.displayName} className="input input-bordered input-sm w-full" disabled />

                            <input type="text" name='buyerEmail' placeholder="Type here" value={user?.email} className="input input-bordered input-sm w-full" disabled />

                            <input type="text" placeholder="Type here" value={`Price: ${sellingPrice} BDT`} className="input input-bordered input-sm w-full " disabled />

                            <input type="text" name='buyerPhone' placeholder="Enter Phone Number" className="input input-bordered input-sm w-full focus:outline-none " required />

                            <input type="text" name='buyerLocation' placeholder="Location To Meet" className="input input-bordered input-sm w-full focus:outline-none " required />
                            <div>
                                <button className={`w-full btn btn-info btn-sm text-white ${loading ? 'loading' : ''}`}>BOOK</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;