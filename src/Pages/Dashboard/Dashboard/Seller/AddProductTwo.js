import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Context/UserContext';
import Loader from '../../../../Components/Loading/Loader';
const AddProductTwo = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://boilagbe-com-server.vercel.app/admin/categories');
            const data = await res.json();
            return data;
        }
    })
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log('adding product')
        setLoading(true);
        // upload to imgbb -> eto slow ken bhai
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
                        productName: form.productName.value,
                        sellingPrice: form.sellingPrice.value,
                        originalPrice: form.originalPrice.value,
                        yearOfUse: form.yearOfUse.value,
                        mobileNo: form.mobileNo.value,
                        location: form.location.value,
                        condition: form.condition.value,
                        image: imgData.data.url,
                        categoryId: form.categoryId.value,
                        description: form.description.value,
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
                <form className="card-body" onSubmit={handleAddProduct}>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text"
                                name='productName' placeholder="Product Name" className="input input-bordered focus:outline-none" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input type="number"
                                 name='sellingPrice' placeholder="Selling Price" className="input input-bordered focus:outline-none" required />
                          
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="number"
                             name='originalPrice' placeholder="Original Price" className="input input-bordered focus:outline-none" required />
                        
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of Use</span>
                            </label>
                            <input type="number"
                                name='yearOfUse' placeholder="Year of Use" className="input input-bordered focus:outline-none" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile No</span>
                            </label>
                            <input type="text"
                                name='mobileNo' placeholder="Mobile No" className="input input-bordered focus:outline-none" required />
                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text"
                                name='location' placeholder="Location" className="input input-bordered focus:outline-none" required />
                         
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4'>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select name='condition'
                                
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
                            <input type="file" name='image' onChange={changeHandler} className="file-input  file-input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <select name='categoryId'
                              
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
                            <textarea className="textarea textarea-info focus:outline-none w-full" placeholder="Description" name='description' required></textarea>
                          
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

export default AddProductTwo;