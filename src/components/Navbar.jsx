import { NavLink } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../CartContext';

const Navbar = () => {

    const { toggleCart } = useContext(AuthContext);

    const navList =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li>
                <button className="flex items-center gap-1" onClick={toggleCart}>
                    <BsCart4 className="text-lg" />
                    Cart
                </button>
            </li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navList
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Mini E-commerce Site</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navList
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;