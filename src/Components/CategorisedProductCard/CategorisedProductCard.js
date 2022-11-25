import React from 'react';

const CategorisedProductCard = ({ product,setProductInfo }) => {

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={product.image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <div className="flex">
                    <p className='font-semibold'>Selling Price: {product.sellingPrice}</p>
                    <p className='font-semibold'>Original Price: {product.originalPrice}</p>
                </div>
                <div className="flex ">
                    <p className='font-semibold'>Years Used: {product.yearOfUse}</p>
                    <p className='font-semibold'>Availability: {product?.status ? product?.status : 'Available'}</p>

                </div>

                <p className='font-semibold'>Seller: {product.sellerName}</p>
                <p className='font-semibold'>Posted: {product?.postTime ? product?.postTime : 'Not Found'}</p>
                <p className='font-semibold'>Location: {product.location}</p>
                <div className="card-actions justify-end">

                    {product?.status !== 'Sold' && <label htmlFor="bookingModal" className='text-white btn btn-sm btn-info' onClick={() => setProductInfo(product)}>BOOK NOW</label>}

                    {product?.status === 'Sold' && <button className='text-white btn btn-sm cursor-not-allowed'>BOOK NOW</button>}

                </div>
            </div>
        </div>
    );
};

export default CategorisedProductCard;