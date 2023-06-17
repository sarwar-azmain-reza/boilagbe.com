import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import CategorisedProductCard from '../../Components/CategorisedProductCard/CategorisedProductCard';
import Loader from '../../Components/Loading/Loader';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';
import ReportModal from '../../Components/ReportModal/ReportModal';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../Hooks/useTitle';

const CategorisedProduct = () => {
    useTitle('Products|BoiLagbe');
    const navigation = useNavigation();
    const products = useLoaderData();
    const { user } = useContext(AuthContext);
    const [productInfo, setProductInfo] = useState(null);
    const [reportedProduct, setReportedProduct] = useState(null);
    const [productDetails, setProductDetails] = useState(null);
    let { id } = useParams();

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://boilagbe-com-server.vercel.app/admin/categories')
            .then(response => {
                console.log(response);
                setCategory(response.data.find(category => category._id === id));
            }
            )
    }, [id])

    if (navigation.state === 'loading') {
        return <Loader></Loader>
    }
    return (
        <div className='py-10 container mx-auto px-5'>
            <div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li className='text-info'>
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                Home
                            </Link>
                        </li>
                        <li className='text-info'>
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                {category.category}
                            </Link>
                        </li>
                    </ul>
                </div>
                <h1 className='text-2xl font-semibold'>{category.category}</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10'>
                {
                    products.length > 0 ?
                        products.map(product => <CategorisedProductCard key={product._id} product={product} setProductInfo={setProductInfo} setReportedProduct={setReportedProduct} setProductDetails={setProductDetails}></CategorisedProductCard>)
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
            {
                productDetails && <ProductDetailsModal productDetails={productDetails} setProductDetails={setProductDetails}></ProductDetailsModal>
            }
        </div>
    );
};

export default CategorisedProduct;