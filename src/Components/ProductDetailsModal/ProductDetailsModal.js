import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
const ProductDetailsModal = ({ productDetails }) => {
    return (
        <>
            <input type="checkbox" id="detailModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="detailModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productDetails.productName}</h3>
                    <div className='py-4'>
                        <p className='font-semibold'>Selling Price: {productDetails.sellingPrice} BDT</p>
                        <p className='font-semibold'>Original Price: {productDetails.originalPrice} BDT</p>
                        <p className='font-semibold'>Years Used: {productDetails.yearOfUse}</p>
                        <p className='font-semibold'>Availability: {productDetails?.status ? productDetails?.status : 'Available'}</p>
                        <p className='font-semibold'>Condition: {productDetails?.condition}</p>
                        <p className='font-semibold flex'>Seller: {productDetails.sellerName}{
                            productDetails?.verifiedSeller && <CheckBadgeIcon className='h-4 text-info' />
                        }</p>


                        <p className='font-semibold'>Posted Date: {productDetails?.postTime ? productDetails?.postTime : 'Not Found'}</p>
                        <p className='font-semibold'>Location: {productDetails.location}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsModal;