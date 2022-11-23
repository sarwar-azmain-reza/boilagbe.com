import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
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
                <div className='mt-10 container mx-auto'>
                    <h1 className='text-3xl font-semibold text-center'>Advertised Products</h1><hr />
                    <div>

                    </div>
                </div>

                {/* Why Boilagbe */}
                <div className='mt-10 container mx-auto'>
                    <h1 className='text-3xl font-semibold text-center'>Why Us?</h1><hr />
                    <div className='mt-10'>
                        <div className="flex w-full">
                            <div className="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center">content</div>
                            <div className="divider divider-horizontal">AND</div>
                            <div className="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center">content</div>
                            <div className="divider divider-horizontal">AND</div>
                            <div className="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center">content</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;