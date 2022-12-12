import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import CategorisedProductCard from '../../Components/CategorisedProductCard/CategorisedProductCard';
import Loader from '../../Components/Loading/Loader';
import ReportModal from '../../Components/ReportModal/ReportModal';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../Hooks/useTitle';

const CategorisedProduct = () => {
    useTitle('Products|BoiLagbe');
    const navigation = useNavigation();
    const products = useLoaderData();
    const {user} = useContext(AuthContext);
    const [productInfo,setProductInfo] = useState(null);
    const [reportedProduct,setReportedProduct] = useState(null);

    if(navigation.state ==='loading'){
        return <Loader></Loader>
    }
    return (
        <div className='py-10 container mx-auto px-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.length > 0 ?
                    products.map(product => <CategorisedProductCard key={product._id} product={product} setProductInfo={setProductInfo} setReportedProduct={setReportedProduct}></CategorisedProductCard>)
                    :
                    <div className='text-2xl font-semibold text-red-500'>No Products Here! </div>
                }
            </div>
            {
                productInfo && <BookingModal productInfo={productInfo} setProductInfo={setProductInfo} user={user}></BookingModal>
            }
            {
                reportedProduct && <ReportModal reportedProduct={reportedProduct} setReportedProduct={setReportedProduct} user={user}></ReportModal>
            }
        </div>
    );
};

export default CategorisedProduct;