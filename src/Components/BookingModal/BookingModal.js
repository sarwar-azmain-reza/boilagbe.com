import React from 'react';

const BookingModal = ({ productInfo, user }) => {
    const { productName, sellingPrice } = productInfo;
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form >
                        <div className="form-control mt-2 grid grid-cols-1 gap-3">
                            <input type="text" placeholder="Type here" value={user?.displayName} className="input input-bordered input-sm w-full" disabled />

                            <input type="text" placeholder="Type here" value={user?.email} className="input input-bordered input-sm w-full" disabled />

                            <input type="text" placeholder="Type here" value={`Price: ${sellingPrice} BDT`} className="input input-bordered input-sm w-full " disabled />

                            <input type="text" placeholder="Enter Phone Number" className="input input-bordered input-sm w-full focus:outline-none " />

                            <input type="text" placeholder="Location To Meet" className="input input-bordered input-sm w-full focus:outline-none " />
                            <div>
                                <button className='w-full btn btn-info btn-sm text-white'>BOOK</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;