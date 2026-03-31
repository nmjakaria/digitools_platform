import { Logs, ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({ selectedProducts, setSelectedType }) => {
    return (
        <div className='container mx-auto sticky top-0 z-50'>
            <div className="navbar bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-4 rounded-xl shadow-sm">
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
                                <span className="badge badge-sm indicator-item bg-[#7C3AED] border-none text-white text-[10px]"> {selectedProducts.length} </span>
                            </div>
                        </div>
                        <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold"> {selectedProducts.length} </span>
                                <span className="text-info">Subtotal: ${selectedProducts.reduce((total, product) => total + product.price, 0)} </span>
                                <div className="card-actions">
                                    <button onClick={() => setSelectedType('Card')} className="btn bg-[#7C3AED] text-white btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-ghost font-medium text-gray-700 hidden sm:inline-flex">
                        Login
                    </button>

                    <button className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 active:scale-95 transition">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;