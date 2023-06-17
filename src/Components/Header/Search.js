import React from 'react';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

const Search = () => {
    return (
        <div className='navbar-center  lg:w-3/6 hidden lg:block'>
            <form className="form-control w-full">
                <label className="input-group ">
                    <input type="text" placeholder="Search Product" className="input input-bordered input-md focus:outline-none border-blue-400 w-full" required />
                    <button className='bg-info px-3 text-white'><MagnifyingGlassCircleIcon className='h-6' /></button>
                </label>
            </form>
        </div>
    );
};

export default Search;