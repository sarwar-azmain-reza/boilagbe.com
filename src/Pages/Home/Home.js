import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { BookOpenIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import useTitle from '../../Hooks/useTitle';
import axios from 'axios';
import AdvertisedProducts from './AdvertisedProducts';
import Loader from '../../Components/Loading/Loader';
const Home = () => {
    const categories = useLoaderData();
    useTitle('BoiLagbe');
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        axios.get('https://boilagbe-com-server.vercel.app/advertised')
            .then(response => {
                console.log(response);
                setAdvertisedProducts(response.data);
            })
            .catch(error=> {
                console.log(error);
            })
    }, [])

    if(navigation.state ==='loading'){
        return <Loader></Loader>
    }

    return (
        <>
            <div className="hero h-96" style={{ backgroundImage: `url("https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/11/jaredd-craig-HH4WBGNyltc-unsplash.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Want To Buy And Sell Old Books?</h1>
                        <p className="mb-5 text-lg">BoiLagbe is here. You can find various categories of books. Want to be a seller? Just register and advertise your books. Want to buy books? Just open an account and start buying.</p>
                    </div>
                </div>
            </div>

            <div className='py-10 px-3'>
                <div className='container mx-auto  grid md:grid-cols-3 gap-5'>
                    {
                        categories?.length ? 
                        categories.map(category => <Link to={`/category/${category._id}`} key={category._id} className='text-lg font-semibold bg-slate-700 text-white cursor-pointer border py-2 rounded text-center'>{category.category}</Link>)
                        :
                        <></>
                    }
                </div>

                {/* Advertised items - need to have once or more items labaled as advertised */}
                {
                    advertisedProducts.length ? 
                    <AdvertisedProducts advertisedProducts={advertisedProducts}></AdvertisedProducts>
                    :
                    <></>
                }

                {/* Why Boilagbe */}
                <div className='mt-10 container mx-auto'>
                    <h1 className='text-3xl font-semibold text-center'>Why Us?</h1><hr />
                    <div className='mt-10'>
                        <div className="flex flex-col lg:flex-row w-full">
                            <div className="grid  py-6 flex-grow card bg-slate-800 rounded-md place-items-center text-white"><BookOpenIcon className='h-7 text-white' />Various Categories Of Books Are Available</div>
                            <div className="divider lg:divider-horizontal">AND</div>
                            <div className="grid  py-6 flex-grow card bg-slate-800 rounded-md place-items-center text-white"><ShieldCheckIcon className='h-7 text-white' />Authenticity Of Books Are Checked</div>
                            <div className="divider lg:divider-horizontal">AND</div>
                            <div className="grid  py-6 flex-grow card bg-slate-800 rounded-md place-items-center text-white"><CheckCircleIcon className='h-7 text-white' />Sellers Are varified To Prevent Fraud</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;