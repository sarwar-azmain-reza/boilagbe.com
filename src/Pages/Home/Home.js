import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { BookOpenIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import useTitle from '../../Hooks/useTitle';
import axios from 'axios';
import AdvertisedProducts from './AdvertisedProducts';
import Loader from '../../Components/Loading/Loader';
import Slider from '../../Components/Slider/Slider';
import BrandsSlider from '../../Components/BrandsSlider/BrandsSlider';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
const Home = () => {

    useTitle('BoiLagbe');
    const [advertisedProducts, setAdvertisedProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://boilagbe-com-server.vercel.app/admin/categories')
            .then(response => {
                console.log(response);
                setCategories(response.data);
            }
            )
    }, [])

    useEffect(() => {
        axios.get('https://boilagbe-com-server.vercel.app/advertised')
            .then(response => {
                console.log(response);
                setAdvertisedProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
            {/* <div className="hero h-96" style={{ backgroundImage: `url("https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/11/jaredd-craig-HH4WBGNyltc-unsplash.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Want To Buy And Sell Old Books?</h1>
                        <p className="mb-5 text-lg">BoiLagbe is here. You can find various categories of books. Want to be a seller? Just register and advertise your books. Want to buy books? Just open an account and start buying.</p>
                    </div>
                </div>
            </div> */}

            <div className="container mx-auto px-5 mt-5">
                <div className="bg-white  lg:h-[25.7rem] border rounded-lg">
                    <Slider />
                </div>


                <div className='py-10 px-3'>
                    <div className='container mx-auto  grid md:grid-cols-3 gap-5'>
                        {
                            categories?.length ?
                                categories.map(category => <Link to={`/category/${category._id}`} key={category._id} className='text-lg font-semibold bg-slate-100 shadow-md  cursor-pointer border py-2 rounded text-center'>{category.category}</Link>)
                                :
                                <></>
                        }
                    </div>
                    <div className="grid grid-cols-12 bg-white px-5 border rounded-lg my-10">
                        <div className="col-span-3 mt-5 ml-3 flex items-center">
                            <h1 className="font-semibold text-2xl">ADVERTISED BOOKS</h1>
                        </div>
                        <div className="col-span-9 my-5">
                            {
                                advertisedProducts.length ?
                                    <BrandsSlider displayProducts={advertisedProducts}></BrandsSlider>
                                    :
                                    <></>
                            }
                        </div>
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
                        <h1 className='text-3xl font-semibold text-center'>WHY US</h1><hr />
                        <div className='mt-10'>
                            <div className="flex flex-col lg:flex-row w-full">
                                <div className="grid  py-6 flex-grow card bg-slate-100 rounded-md place-items-center "><BookOpenIcon className='h-7 text-info' />Various Categories Of Books Are Available</div>
                                <div className="divider lg:divider-horizontal">AND</div>
                                <div className="grid  py-6 flex-grow card bg-slate-100 rounded-md place-items-center"><ShieldCheckIcon className='h-7 text-info' />Authenticity Of Books Are Checked</div>
                                <div className="divider lg:divider-horizontal">AND</div>
                                <div className="grid  py-6 flex-grow card bg-slate-100 rounded-md place-items-center "><CheckCircleIcon className='h-7 text-info' />Sellers Are varified To Prevent Fraud</div>
                            </div>
                        </div>
                    </div>

                </div>
                <NewsLetter></NewsLetter>
            </div>
        </>
    );
};

export default Home;