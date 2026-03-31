import React from 'react';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#101727] text-white pt-20 pb-10 px-4">
            <div className="container mx-auto max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <h2 className="text-4xl font-bold tracking-tight">DigiTools</h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xl font-semibold">Product</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xl font-semibold">Company</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">About</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xl font-semibold">Resources</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xl font-semibold">Social Links</h3>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#101727] cursor-pointer hover:bg-gray-200 transition-colors">
                                <RiInstagramFill size={20} />
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#101727] cursor-pointer hover:bg-gray-200 transition-colors">
                                <FaSquareFacebook size={20} />
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#101727] cursor-pointer hover:bg-gray-200 transition-colors">
                                <FaXTwitter size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex items-center justify-between gap-6 text-gray-400 text-sm">
                    <p>© {currentYear} Digitools. All rights reserved.</p>

                    <div className="flex gap-8">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;