import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import CategorisedProductCard from '../../Components/CategorisedProductCard/CategorisedProductCard';
import Loader from '../../Components/Loading/Loader';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../Hooks/useTitle';

const CategorisedProduct = () => {
    useTitle('Products|BoiLagbe');
    const navigation = useNavigation();
    const products = useLoaderData();
    const {user} = useContext(AuthContext);
    const [productInfo,setProductInfo] = useState(null);

    const handleReport = (id) =>{
        console.log(id)
        fetch(`https://boilagbe-com-server.vercel.app/products/report/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('boilagbeToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Reported To Admin Successfully.')
                }
            })

    }
    if(navigation.state ==='loading'){
        return <Loader></Loader>
    }
    return (
        <div className='py-10 container mx-auto px-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.length > 0 ?
                    products.map(product => <CategorisedProductCard key={product._id} product={product} setProductInfo={setProductInfo} handleReport={handleReport}></CategorisedProductCard>)
                    :
                    <div className='text-2xl font-semibold text-red-500'>No Products Here! </div>
                }
            </div>
            {
                productInfo && <BookingModal productInfo={productInfo} setProductInfo={setProductInfo} user={user}></BookingModal>
            }
        </div>
    );
};

export default CategorisedProduct;