import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = event => {
        event.preventDefault();
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
                                    required: "Product Name is Required"
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
                                    required: "Location is Required"
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
                                <option selected value='Fair'>Fair</option>
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
                            })} name='image' placeholder="" className="file-input  file-input-bordered" required />
                             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' placeholder="" className="input input-bordered focus:outline-none" required />
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