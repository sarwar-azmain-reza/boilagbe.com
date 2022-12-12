import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CategorisedProductCard = ({ product, setProductInfo,setReportedProduct }) => {

    return (
        <div className="card bg-slate-800 text-white shadow-xl">
            <figure><img src={product.image} alt="Book" className='h-60 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>

                <p className='font-semibold'>Selling Price: {product.sellingPrice} BDT</p>
                <p className='font-semibold'>Original Price: {product.originalPrice} BDT</p>
                <p className='font-semibold'>Years Used: {product.yearOfUse}</p>
                <p className='font-semibold'>Availability: {product?.status ? product?.status : 'Available'}</p>
                <p className='font-semibold'>Condition: {product?.condition}</p>
                <p className='font-semibold flex'>Seller: {product.sellerName}{
                    product?.verifiedSeller && <CheckBadgeIcon className='h-4 text-info' />
                }</p>


                <p className='font-semibold'>Posted Date: {product?.postTime ? product?.postTime : 'Not Found'}</p>
                <p className='font-semibold'>Location: {product.location}</p>

                <div className="card-actions justify-end">

                    {product?.status !== 'Sold' && <label htmlFor="bookingModal" className='text-white btn btn-sm btn-info' onClick={() => setProductInfo(product)}>BOOK NOW</label>}

                    <label htmlFor='reportModal' onClick={() => setReportedProduct(product)} className='text-white btn-warning btn btn-sm '>Report</label>

                </div>
            </div>
        </div>
    );
};

export default CategorisedProductCard;