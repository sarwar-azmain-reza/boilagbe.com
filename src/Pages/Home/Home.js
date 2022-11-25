import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BookOpenIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import useTitle from '../../Hooks/useTitle';
import axios from 'axios';
import AdvertisedProducts from './AdvertisedProducts';
const Home = () => {
    const categories = useLoaderData();
    useTitle('BoiLagbe');
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/advertised')
            .then(response => {
                console.log(response);
                setAdvertisedProducts(response.data);
            })
            .catch(error=> {
                console.log(error);
            })
    }, [])

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
                        categories.map(category => <Link to={`/category/${category._id}`} key={category._id} className='text-lg font-semibold bg-base-300 cursor-pointer border py-2 rounded text-center'>{category.category}</Link>)
                    }
                </div>

                {/* Advertised items - need to have once or more items labaled as advertised */}
                {
                    advertisedProducts ? 
                    <AdvertisedProducts advertisedProducts={advertisedProducts}></AdvertisedProducts>
                    :
                    <></>
                }

                {/* Why Boilagbe */}
                <div className='mt-10 container mx-auto'>
                    <h1 className='text-3xl font-semibold text-center'>Why Us?</h1><hr />
                    <div className='mt-10'>
                        <div className="flex flex-col lg:flex-row w-full">
                            <div className="grid  py-6 flex-grow card bg-base-300 rounded-md place-items-center"><BookOpenIcon className='h-7 text-gray-600' />Various Categories Of Books Are Available</div>
                            <div className="divider lg:divider-horizontal">AND</div>
                            <div className="grid  py-6 flex-grow card bg-base-300 rounded-md place-items-center"><ShieldCheckIcon className='h-7 text-gray-600' />Authenticity Of Books Are Checked</div>
                            <div className="divider lg:divider-horizontal">AND</div>
                            <div className="grid  py-6 flex-grow card bg-base-300 rounded-md place-items-center"><CheckCircleIcon className='h-7 text-gray-600' />Sellers Are varified To Prevent Fraud</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;