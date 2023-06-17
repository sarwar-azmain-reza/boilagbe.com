import React from 'react';

const CategorisedProductCard = ({ product, setProductInfo, setReportedProduct, setProductDetails }) => {

    return (
        // <div className="card bg-slate-800 text-white shadow-xl">
        //     <figure><img src={product.image} alt="Book" className='h-60 w-full' /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{product.productName}</h2>

        //         <p className='font-semibold'>Selling Price: {product.sellingPrice} BDT</p>
        //         <p className='font-semibold'>Original Price: {product.originalPrice} BDT</p>
        //         <p className='font-semibold'>Years Used: {product.yearOfUse}</p>
        //         <p className='font-semibold'>Availability: {product?.status ? product?.status : 'Available'}</p>
        //         <p className='font-semibold'>Condition: {product?.condition}</p>
        //         <p className='font-semibold flex'>Seller: {product.sellerName}{
        //             product?.verifiedSeller && <CheckBadgeIcon className='h-4 text-info' />
        //         }</p>


        //         <p className='font-semibold'>Posted Date: {product?.postTime ? product?.postTime : 'Not Found'}</p>
        //         <p className='font-semibold'>Location: {product.location}</p>

        //         <div className="card-actions justify-end">

        //             {product?.status !== 'Sold' && <label htmlFor="bookingModal" className='text-white btn btn-sm btn-info' onClick={() => setProductInfo(product)}>BOOK NOW</label>}

        //             <label htmlFor='reportModal' onClick={() => setReportedProduct(product)} className='text-white btn-warning btn btn-sm '>Report</label>

        //         </div>
        //     </div>
        // </div>

        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 bg-slate-100">
            <img src={product.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{product.productName}</span>
                <h2 className="text-xl font-semibold tracking-wide">BDT: {product.sellingPrice}</h2>
            </div>

            <div className='flex justify-between'>

                <label htmlFor='reportModal' onClick={() => setReportedProduct(product)} className='text-white bg-warning px-2 py-1 rounded cursor-pointer'>REPORT</label>

                {product?.status !== 'Sold' && <label htmlFor="bookingModal" className='text-white bg-info px-4 py-1 rounded cursor-pointer' onClick={() => setProductInfo(product)}>BOOK</label>}


                <label htmlFor='detailModal' onClick={() => setProductDetails(product)} className='text-white bg-success px-2 py-1 rounded cursor-pointer '>DETAILS</label>
            </div>
        </div>
    );
};

export default CategorisedProductCard;