import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    useTitle('Register|BoiLagbe');
    const { userSignUp, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const accountType = form.accountType.value;
        const email = form.email.value;
        const password = form.password.value;
        setLoading(true);
        console.log(name, accountType, email, password);
        userSignUp(email, password)
            .then(result => {
                // const user = result.user;
                setError('');
                handleUpdateUserProfile(name);
                saveUser(name, email, accountType);

            })
            .catch(error => {
                const errormsg = error.message;
                let errorSplit = errormsg.split(' ')
                let errorMessage = errorSplit[errorSplit.length - 1];
                setError(errorMessage);
                console.log(error.message);
                setLoading(false);
            })
    }

    
    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }


    const saveUser = (name, email, accountType) => {
        const user = { name, email, accountType };
        fetch('https://boilagbe-com-server.vercel.app/admin/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('After saving',data)
                fetch(`https://boilagbe-com-server.vercel.app/jwt?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.accessToken) {
                            localStorage.setItem('boilagbeToken', data.accessToken);
                        }
                        setLoading(false);
                        console.log('After jwt call',user);
                        // form.reset();
                        navigate('/');
                    });
            })
    }

    return (
        <div className={`py-10`}>
            <h1 className='text-center text-4xl font-bold '>Register To BoiLagbe</h1>

            <div className='mb-10 flex lg:flex-row flex-col items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-login-account-smartphone-app-user-interface-with-secure-password-mobile-application-ui-web-banner-access-cartoon-people-vector-illustration_2175-1060.jpg?w=2000" alt="pngwing-com" border="0" className='h-72 mr-5' />

                </div>
                <div className={`card md:w-1/2 lg:w-2/6 shadow-2xl mt-10 bg-base-100`}>
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Account Type</span>
                            </label>
                            <select name='accountType' className="select select-bordered focus:outline-none w-full ">
                                <option selected value='Buyer'>Buyer</option>
                                <option value='Seller'>Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered focus:outline-none" required />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already, have an account? Login Here</Link>
                            </label>
                        </div>
                        {error && <p className='text-red-600'>Error: {error}</p>}
                        <div className="form-control">
                            <button className={`btn bg-sky-600 border-none ${loading ? 'loading' : ''}`}>Register</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;