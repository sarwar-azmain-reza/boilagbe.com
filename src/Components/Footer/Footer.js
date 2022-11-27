import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-800  py-5 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5  container mx-auto px-5'>
                <div className='text-white'>
                    <h1 className='text-xl font-semibold mb-2 border-b'>KIDS CAMP</h1>
                    <p className='flex mb-2'><MapPinIcon className='h-6 w-6 mr-3' />R-415, Level-4, YKSG, DSC, Dhaka</p>
                    <p className='flex mb-2'><EnvelopeIcon className='h-6 w-6 mr-3' />contact@boilagbe.com</p>
                    <p className='flex mb-2'><PhoneIcon className='h-6 w-6 mr-3' />01745797203</p>
                    <p>(Available: Sat - Thu, 10:00 AM to 7:00 PM)</p>
                </div>
                <div className='flex flex-col text-white'>
                    <h1 className='text-xl font-semibold mb-2 border-b'>Quick Links</h1>
                    <Link to='/' className='flex items-center mb-2'>Home</Link>
                    <Link to='/weblogs' className='flex items-center mb-2'>Weblog</Link>
                    <Link to='/dashboard' className='flex items-center mb-2'>Dashboard</Link>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-2 border-b text-white'>We Accept</h1>
                    <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="ssl-commerce-1d268dce" border="0" />
                </div>
            </div>
            <div className='text-white flex justify-center mt-5'>
                <p className='text-center'>All Rightes Reserved | © BoiLagbe 2022 & EyafiNeo </p>
            </div>
        </div>
    );
};

export default Footer;