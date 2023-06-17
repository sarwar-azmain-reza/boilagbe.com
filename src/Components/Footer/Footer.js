import React from 'react';
import { Link } from 'react-router-dom';
import googlePLay from '../../Assets/en_badge_web_generic.png';
import logo from '../../Assets/boilagbe.png'
const Footer = () => {
    return (
        <div className='bg-slate-100 text-zinc-500 mt-20 py-10 shadow-inner'>
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5  container mx-auto  px-5'>
                <div className='text-zinc-500 flex flex-col justify-center'>
                    <div className='flex flex-col items-center w-max'>
                        <img src={logo} alt="AX" className='h-10' />
                        <h1 className='text-2xl font-semibold'>BoiLagbe</h1>
                    </div>
                    <h2 className=''>boilagbe.com</h2>

                </div>
                <div className='flex flex-col text-zinc-500'>
                    <h1 className=' font-bold mb-5 '>SUPPORT</h1>
                    <Link to='/' className='flex items-center text-sm'>Help Center</Link>
                    <Link to='/weblogs' className='flex items-center text-sm'>Returns and Refunds</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>Terms and Conditions</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>Contact Us</Link>
                </div>

                <div className='flex flex-col text-zinc-500'>
                    <h1 className=' font-bold mb-5 '>EARN WITH US</h1>
                    <Link to='/' className='flex items-center text-sm'>Play Game</Link>
                    <Link to='/weblogs' className='flex items-center text-sm'>Learn and Earn</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>Sell Products</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>Join Affiliate Partner</Link>
                </div>

                <div className='flex flex-col text-zinc-500'>
                    <h1 className=' font-bold mb-5 '>BOILAGBE.COM</h1>
                    <Link to='/' className='flex items-center text-sm'>About Us</Link>
                    <Link to='/weblogs' className='flex items-center text-sm'>Careers</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>Donate</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>Privacy Policy</Link>
                </div>
                <div className='flex flex-col text-zinc-500'>
                    <h1 className=' font-bold mb-5 '>SOCIAL LINKS</h1>
                    <Link to='/' className='flex items-center text-sm'>Facebook</Link>
                    <Link to='/weblogs' className='flex items-center text-sm'>Instagram</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>Twitter</Link>
                    <Link to='/dashboard' className='flex items-center text-sm'>LinkedIn</Link>
                </div>
                <div>
                    <h1 className=' font-bold mb-5  text-zinc-500'>DOWNLOAD</h1>
                    <img src={googlePLay} alt="Google Play" className='h-10 mb-2' />
                    <img src={googlePLay} alt="Google Play" className='h-10' />
                </div>
            </div>

            <div className='flex justify-center mt-5'>
                <p>© 2023 boilagbe.com Limited | All Rights Reserved.</p>
            </div>

        </div>
    );
};

export default Footer;