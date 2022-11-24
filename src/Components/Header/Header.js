import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import boi from '../../Assets/boilagbe.png'
import { AuthContext } from '../../Context/UserContext';
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
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/weblogs'>Weblogs</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>

                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </>
                                :
                                <>
                                    <li><Link to='/register' >Register</Link></li>
                                    <li><Link to='/login' >Login</Link></li>

                                </>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img src={boi} alt="" className='h-10' />
                    BoiLagbe
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className={`${location.pathname === '/' ? 'border-b-2' : ''}`}>Home</Link></li>
                    <li><Link to='/weblogs' className={`${location.pathname === '/weblogs' ? 'border-b-2' : ''}`}>Weblogs</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><Link to='/dashboard' className={`${location.pathname === '/dashboard' ? 'border-b-2' : ''}`}>Dashboard</Link></li>

                                <li><button onClick={handleLogout}>Logout</button></li>
                            </>
                            :
                            <>
                                <li><Link to='/register' className={`${location.pathname === '/register' ? 'border-b-2' : ''}`}>Register</Link></li>
                                <li><Link to='/login' className={`${location.pathname === '/login' ? 'border-b-2' : ''}`}>Login</Link></li>

                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden lg:block'>
                    {
                        user?.uid ? <p>{user?.displayName ? user?.displayName : user?.email}</p>
                            :
                            <></>
                    }
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            </div>
        </div>
    );
};

export default Header;