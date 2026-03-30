import { Play, Sparkles } from 'lucide-react';
import React from 'react';
import BannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="order-2 md:order-1 space-y-6 md:space-y-8 max-w-xl">
                        <div className="inline-flex items-center gap-3 bg-[#E8EDFF] px-4 py-2 rounded-full border border-[#D0D9FF]">
                            <div className="relative flex items-center justify-center w-6 h-6">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B5CF6] opacity-30"></span>
                                <Sparkles size={16} className="text-[#8B5CF6] fill-[#8B5CF6]" />
                            </div>

                            <span className="text-[#8B5CF6] font-semibold text-lg">
                                New: AI-Powered Tools Available
                            </span>
                        </div>

                        <h1 className="text-5xl font-extrabold text-[#111827] leading-tight">
                            Supercharge Your Digital Workflow
                        </h1>

                        <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 active:scale-95 transition-transform duration-200">
                                Explore Products
                            </button>

                            <button className="flex items-center justify-center gap-2 text-[#8656EF] border border-[#8656EF] font-semibold px-8 py-3 rounded-full hover:bg-[#F1E9FF] shadow-sm">
                                <Play />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <img
                            src={BannerImage}
                            alt="Banner"
                            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;