import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const NewsLetter = () => {
    return (
        <div className='text-center py-10 bg-zinc-200 rounded-lg'>
            <h2 className='text-xl font-semibold mb-1'>SUBSCRIBE ON OUR NEWSLETTER</h2>
            <p className='gray-text'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <form action="" className='flex items-center w-1/3 m-auto mt-5' >
                <fieldset className='flex items-center bg-white w-full pl-4 rounded-lg border m-auto'>
                    <AiOutlineMail className='gray-text text-xl'></AiOutlineMail>
                    <input type="text" placeholder='Email' className='ml-2 p-2 w-full rounded-lg' />
                </fieldset>
                <button type='submit' className='bg-blue-400 font-semibold px-5 py-2 rounded-md ml-2 text-white'>Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;
