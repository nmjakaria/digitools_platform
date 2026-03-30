import { Logs, ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-150 px-4 md:px-8 py-4 rounded-xl shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Logs />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl md:text-3xl font-bold text-[#7C3AED] cursor-pointer">
                        DigiTools
                    </a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-semibold text-gray-600">
                        <li><a className="hover:text-[#7C3AED]">Products</a></li>
                        <li><a className="hover:text-[#7C3AED]">Features</a></li>
                        <li><a className="hover:text-[#7C3AED]">Pricing</a></li>
                        <li><a className="hover:text-[#7C3AED]">Testimonials</a></li>
                        <li><a className="hover:text-[#7C3AED]">FAQ</a></li>
                    </ul>
                </div>


                <div className="navbar-end gap-2">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <ShoppingCart />
                                <span className="badge badge-sm indicator-item bg-[#7C3AED] border-none text-white text-[10px]">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn bg-[#7C3AED] text-white btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-ghost font-medium text-gray-700 hidden sm:inline-flex">
                        Login
                    </button>

                    <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-4 md:px-8 normal-case text-sm md:text-base">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;