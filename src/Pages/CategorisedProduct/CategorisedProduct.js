import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import CategorisedProductCard from '../../Components/CategorisedProductCard/CategorisedProductCard';
import { AuthContext } from '../../Context/UserContext';

const CategorisedProduct = () => {
    const products = useLoaderData();
    const {user} = useContext(AuthContext);
    const [productInfo,setProductInfo] = useState(null);
    return (
        <div className='py-10 container mx-auto px-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.map(product => <CategorisedProductCard key={product._id} product={product} setProductInfo={setProductInfo}></CategorisedProductCard>)
                }
            </div>
            {
                productInfo && <BookingModal productInfo={productInfo} user={user}></BookingModal>
            }
        </div>
    );
};

export default CategorisedProduct;