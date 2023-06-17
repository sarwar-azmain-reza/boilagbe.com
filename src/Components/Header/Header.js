import { UserPlusIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import boi from '../../Assets/boilagbe.png'
import { AuthContext } from '../../Context/UserContext';
import Nav from './Nav';
import Search from './Search';
const Header = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        // <div className="navbar bg-slate-900 text-zinc-500 font-semibold">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
        //                 <li><Link to='/'>Home</Link></li>
        //                 <li><Link to='/weblogs'>Weblogs</Link></li>
        //                 {
        //                     user?.uid ?
        //                         <>
        //                             <li><Link to='/dashboard'>Dashboard</Link></li>

        //                             <li><button onClick={handleLogout}>Logout</button></li>
        //                         </>
        //                         :
        //                         <>
        //                             <li><Link to='/register' >Register</Link></li>
        //                             <li><Link to='/login' >Login</Link></li>

        //                         </>
        //                 }
        //             </ul>
        //         </div>
        //         <Link className="btn btn-ghost normal-case text-xl">
        //             <img src={boi} alt="" className='h-10' />
        //             BoiLagbe
        //         </Link>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal p-0">
        //             <li><Link to='/' className={`${location.pathname === '/' ? 'border-b' : ''}`}>Home</Link></li>
        //             <li><Link to='/weblogs' className={`${location.pathname === '/weblogs' ? 'border-b' : ''}`}>Weblogs</Link></li>
        //             {
        //                 user?.uid ?
        //                     <>
        //                         <li><Link to='/dashboard' className={`${location.pathname === '/dashboard' ? 'border-b' : ''}`}>Dashboard</Link></li>

        //                         <li><button onClick={handleLogout}>Logout</button></li>
        //                     </>
        //                     :
        //                     <>
        //                         <li><Link to='/register' className={`${location.pathname === '/register' ? 'border-b' : ''}`}>Register</Link></li>
        //                         <li><Link to='/login' className={`${location.pathname === '/login' ? 'border-b' : ''}`}>Login</Link></li>

        //                     </>
        //             }
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <div className='hidden lg:block'>
        //             {
        //                 user?.uid ? <p>{user?.displayName ? user?.displayName : user?.email}</p>
        //                     :
        //                     <></>
        //             }
        //         </div>
        //         {
        //             location.pathname === '/dashboard' && <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //         }
        //     </div>
        // </div>

        <>
            <div className='flex items-center px-12 py-2 border-b-2 '>

                <div className="navbar bg-base-100">
                    <Link to="/" className="navbar-start">
                        <div className='w-52 flex items-center'>
                            <img src={boi} alt="" className='h-10' />
                            <p className='font-semibold text-2xl'>BoiLagbe</p>
                        </div>
                    </Link>

                    <Search />



                    <div className=" navbar-end gap-2">

                        {
                            user?.uid ?
                                <>
                                    <div className="dropdown dropdown-end ">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                                <span className="text-xl">{user?.displayName ? user?.displayName.slice(0, 2) : user?.email.slice(0, 2)}</span>
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            <li><div className="justify-between">{user?.displayName ? user?.displayName : user.email}</div></li>
                                            <li><Link to='/dashboard'>Dashboard</Link></li>
                                            <li><button className="justify-between">Profile</button></li>
                                            <li><button onClick={handleLogout}>Logout</button></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <>
                                    {/* <li><Link to='/register' >Register</Link></li> */}
                                    {/* <li><Link to='/login' >Login</Link></li> */}
                                    <Link to='/login' className='bg-info px-5 py-2 flex items-center rounded-md text-white font-semibold'><UserPlusIcon className='h-7 text-white mr-2' />ENTER</Link>

                                </>

                        }
                    </div>
                </div>
            </div>
            <Nav></Nav>
        </>
    );
};

export default Header;