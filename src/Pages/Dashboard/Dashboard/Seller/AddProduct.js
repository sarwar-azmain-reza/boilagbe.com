import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Context/UserContext';
import Loader from '../../../../Components/Loading/Loader';
const AddProduct = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://boilagbe-com-server.vercel.app/admin/categories');
            const data = await res.json();
            return data;
        }
    })
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log('adding product')
        setLoading(true);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                setLoading(false)
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        productName: data.productName,
                        sellingPrice: data.sellingPrice,
                        originalPrice: data.originalPrice,
                        yearOfUse: data.yearOfUse,
                        mobileNo: data.mobileNo,
                        location: data.location,
                        condition: data.condition,
                        image: imgData.data.url,
                        categoryId: data.categoryId,
                        description: data.description,
                        sellerName: user?.displayName

                    }
                    console.log(product);
                }
            })

    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='conatiner mx-auto px-5 py-10 border'>
            <h1 className='text-center font-semibold text-3xl'>Add A Product</h1><hr />
            <div className='mt-10'>
                <form className="card-body" onSubmit={handleSubmit(handleAddProduct)}>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text"
                                {...register("productName", {
                                    required: "Product Name is Required",
                                })} name='productName' placeholder="Product Name" className="input input-bordered focus:outline-none" required />
                            {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input type="number"
                                {...register("sellingPrice", {
                                    required: "Product selling price is Required"
                                })} name='sellingPrice' placeholder="Selling Price" className="input input-bordered focus:outline-none" required />
                            {errors.sellingPrice && <p className='text-red-500'>{errors.sellingPrice.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="number"
                                {...register("originalPrice", {
                                    required: "Original price is Required"
                                })} name='originalPrice' placeholder="Original Price" className="input input-bordered focus:outline-none" required />
                            {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of Use</span>
                            </label>
                            <input type="number"
                                {...register("yearOfUse", {
                                    required: "Year of use is Required"
                                })} name='yearOfUse' placeholder="Year of Use" className="input input-bordered focus:outline-none" required />
                            {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile No</span>
                            </label>
                            <input type="text"
                                {...register("mobileNo", {
                                    required: "Mobile No is Required"
                                })} name='mobileNo' placeholder="Mobile No" className="input input-bordered focus:outline-none" required />
                            {errors.mobileNo && <p className='text-red-500'>{errors.mobileNo.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text"
                                {...register("location", {
                                    required: "Location is Required",
                                    pattern: /^[A-Za-z]+$/i
                                })} name='location' placeholder="Location" className="input input-bordered focus:outline-none" required />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4'>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select name='condition'
                                {...register("condition")}
                                className="select select-bordered focus:outline-none w-full ">
                                <option value='Fair'>Fair</option>
                                <option value='Good'>Good</option>
                                <option value='Excellent'>Excellent</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="file" {...register("image", {
                                required: "Product image is Required"
                            })} name='image' className="file-input  file-input-bordered" required />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <select name='categoryId'
                                {...register("categoryId")}
                                className="select select-bordered focus:outline-none w-full ">
                                {
                                    categories.map(category => <option
                                        key={category._id}
                                        value={category._id}
                                    >{category.category}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea {...register("description", {
                                required: "Product description is Required",
                                pattern: /^[A-Za-z]+$/i
                            })} className="textarea textarea-info focus:outline-none w-full" placeholder="Description" name='description' required></textarea>
                            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' defaultValue={user?.displayName} disabled className="input input-bordered focus:outline-none" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <button className={`btn bg-sky-600 border-none ${loading ? 'loading' : ''}`}>Add Product</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;