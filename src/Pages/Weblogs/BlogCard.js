import React from 'react';

const BlogCard = ({ blog, showDescription}) => {
    const { _id, image, title } = blog;
    return (
        <div >
            <div className='bg-slate-900 rounded-lg shadow-xl cursor-pointer' onClick={() => showDescription(_id)}>
                <img src={image} alt="" className='h-40 w-full rounded-t-lg' />
                <div className='px-2 mt-2 py-2'>
                    <p className='font-semibold text-white'>Topic: {title}</p>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;