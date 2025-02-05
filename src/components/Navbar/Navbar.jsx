import { NavLink, useLocation } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const Navbar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === "/";
    const [user, setUser] = useState(null)
    const [isError, setError] = useState()

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleGithubSignUp = () => {
        signInWithPopup(auth , githubProvider)
        .then(res => {
            console.log(res.user);
            setUser(res.user)
        })
        .catch(error => {
            console.log(error)
            setError(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth, googleProvider)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => console.log(error))
    }


    const list = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/order'>Pre-Order</NavLink></li>
    </>
    return (
        <div className={`p-4 navbar font-medium ${isHomePage ? ' bg-[#9538E2] text-white rounded-t-xl md:w-[96%] mx-auto ' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#9538E2]">
                        {list}
                    </ul>
                </div>
                <a className="btn btn-ghost md:text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        list
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle text-2xl">
                    <IoMdCart></IoMdCart>
                </button>
                <button className="btn btn-ghost btn-circle text-2xl">
                    <GrFavorite />
                </button>
                {
                    user && <div className='flex items-center justify-center gap-4'>
                        <img className="rounded-full w-14 h-14" src={user.photoURL} alt="_image Not found" />
                        <div>
                            <h3>{user.displayName}</h3>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                }
                {
                    user ?
                        <button className='btn btn-success text-white ml-4' onClick={handleSignOut}  >Sign Out</button> :
                        <div className='flex items-center gap-4'>
                            <div onClick={handleLogin}>
                                <img className='h-8 w-8 rounded-full' src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png" alt="" />
                            </div>
                            <div onClick={handleGithubSignUp} className='bg-white h-8 w-8 rounded-full'>
                                <img className='h-8 w-8 rounded-full' src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="" />
                            </div>
                        </div>
                }

                {
                    isError && <p className='text-center font-bold text-red-600'>Error : {isError}</p>
                }
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar