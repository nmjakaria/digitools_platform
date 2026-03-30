import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-l from-[#4F39F6] to-[#9514FA] '>
            <section className="container mx-auto px-6 md:px-12 lg:px-16 my-12">
                <div className="py-12 px-6 md:py-16">
                    <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 text-white">

                        {/* Active Users */}
                        <div className="text-center flex-1">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">50K+</h2>
                            <p className="text-white/80 font-medium tracking-wide uppercase text-sm md:text-base">
                                Active Users
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-16 bg-white/30"></div>

                        {/* Premium Tools */}
                        <div className="text-center flex-1">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">200+</h2>
                            <p className="text-white/80 font-medium tracking-wide uppercase text-sm md:text-base">
                                Premium Tools
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-16 bg-white/30"></div>

                        {/* Rating */}
                        <div className="text-center flex-1">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">4.9</h2>
                            <p className="text-white/80 font-medium tracking-wide uppercase text-sm md:text-base">
                                Rating
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rating;