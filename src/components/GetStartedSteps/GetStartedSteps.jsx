import React from 'react';
import { User, Package, Rocket } from 'lucide-react';

const GetStartedSteps = () => {
    
    const steps = [
        {
            id: '01',
            Icon: User,
            title: 'Create Account',
            description: 'Sign up for free in seconds. No credit card required to get started.',
        },
        {
            id: '02',
            Icon: Package,
            title: 'Choose Products',
            description: 'Browse our catalog and select the tools that fit your needs.',
        },
        {
            id: '03',
            Icon: Rocket,
            title: 'Start Creating',
            description: 'Download and start using your premium tools immediately.',
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="container mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-lg text-[#6B7280] font-medium max-w-2xl mx-auto">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    
                    {steps.map((step, index) => {
                        const { id, Icon, title, description } = step;
                        return (
                            <div key={index} className="card w-full bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 pt-12 relative flex flex-col items-center text-center">
                                
                                <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center shadow-lg shadow-purple-200">
                                    <span className="text-white font-bold text-sm tracking-widest">{id}</span>
                                </div>

                                <div className="mb-8 w-24 h-24 rounded-full bg-[#E8EDFF] flex items-center justify-center border-4 border-white shadow-md relative">
                                    <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#C4B5FD] opacity-30"></span>
                                    
                                    <Icon size={36} className="text-[#8B5CF6] relative z-10" strokeWidth={2.5} />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-[#111827]">
                                        {title}
                                    </h3>
                                    <p className="text-[#6B7280] text-sm leading-relaxed max-w-sm">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GetStartedSteps;