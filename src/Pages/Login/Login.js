import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import google from '../../Assets/google.png'
const Login = () => {
    const { userSignIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // const from = location.state?.from?.pathname || '/';
    const from = '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setLoading(true);
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                const currentUser = {
                    email: user.email
                }
                setLoading(false);
                console.log(currentUser);
                fetch(`http://localhost:5000/jwt?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.accessToken) {
                            localStorage.setItem('boilagbeToken', data.accessToken);
                        }
                        setLoading(false);
                        console.log('After jwt call', user);
                        form.reset();
                        navigate(from);
                    });
            })
            .catch(error => {
                const errormsg = error.message;
                let errorSplit = errormsg.split(' ')
                setError(errorSplit[2]);
                setLoading(false);
                console.log(error);
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setError('');
                const email = user.email;
                const name = user.displayName;
                saveUser(name, email);
            })
            // navigate(from, { replace: true });
            .catch(error => {
                const errormsg = error.message;
                let errorSplit = errormsg.split(' ')
                let errorMessage = errorSplit[errorSplit.length - 1];
                setError(errorMessage);
                console.log(error);
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email, accountType: "Buyer" };
        fetch('http://localhost:5000/admin/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('After saving', data)
                fetch(`http://localhost:5000/jwt?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.accessToken) {
                            localStorage.setItem('boilagbeToken', data.accessToken);
                        }
                        setLoading(false);
                        console.log('After jwt call', user);
                        navigate('/');
                    });
            })
    }


    return (
        <div className={`py-10 `}>
            <h1 className='text-center text-4xl font-bold '>Login To BoiLagbe</h1>

            <div className='mb-10 flex lg:flex-row flex-col items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="pngwing-com" border="0" className='h-72 mr-5' />

                </div>
                <div className={`card md:w-1/2 lg:w-2/6 shadow-2xl mt-10 bg-base-100 `}>
                    <form className="card-body" onSubmit={handleLogin}>
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
                                <Link to='/signup' className="label-text-alt link link-hover">Don't have an account?</Link>
                            </label>
                        </div>
                        {error && <p className='text-red-600'>Error: {error}</p>}
                        <div className="form-control">
                            <button className={`btn bg-sky-600 border-none ${loading ? 'loading' : ''}`}>Login</button>
                        </div>
                        <div className='mt-0'>
                            <p className='text-center font-semibold text-xl'>Continue With</p>
                            <div className=' mt-2'>
                                <button className='mr-5 w-full flex items-center font-semibold text-lg justify-center bg-gray-300 hover:bg-sky-600 rounded-lg p-1 shadow-lg' onClick={handleGoogleSignIn}>
                                    <img src={google} alt="goggle" border="0" className='h-10' /> GOOGLE
                                </button>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;