import React from 'react';

const CTASection = () => {
    return (
        <section className="w-full py-10 px-4 bg-linear-to-r from-[#9514FA] to-[#2409eb]">
            <div className="container mx-auto text-center text-white space-y-4">

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Ready To Transform Your Workflow?
                </h2>

                <div className="space-y-1 opacity-90">
                    <p className="text-lg md:text-xl font-medium">
                        Join thousands of professionals who are already using Digitools to work smarter.
                    </p>
                    <p className="text-lg md:text-xl font-medium">
                        Start your free trial today.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button className="px-8 py-3.5 bg-white text-[#a855f7] font-bold rounded-full transition-all shadow-lg active:scale-95 hover:shadow-xl hover:-translate-y-0.5">
                        Explore Products
                    </button>

                    <button className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all active:scale-95 hover:bg-white hover:text-[#a855f7]">
                        View Pricing
                    </button>
                </div>

                <p className="text-sm font-medium opacity-80 pt-2">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    );
};

export default CTASection;