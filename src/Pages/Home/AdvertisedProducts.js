import React from 'react';

const AdvertisedProducts = (props) => {
    const { advertisedProducts } = props;
    return (
        <div className='mt-10 container mx-auto'>
            <h1 className='text-3xl font-semibold text-center'>Advertised Books</h1><hr />
            <div className='mt-10 grid md:grid-cols-3 gap-4'>
                {
                    advertisedProducts.map(product => <div key={product._id}>
                        <div className="card card-compact bg-slate-800 text-white shadow-xl">
                            <figure><img src={product.image} alt="Books" className='h-60 w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.productName}</h2>
                                <div className='flex font-semibold'>
                                    <p>Selling Price: {product.sellingPrice}</p>
                                    <p>Original Price: {product.originalPrice}</p>
                                </div>
                                <div className='flex'>
                                    <p className='font-semibold'>Condition: {product?.condition}</p>
                                    <p className='font-semibold'>Seller: {product.sellerName}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AdvertisedProducts;