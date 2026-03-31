import React, { use } from 'react';
import { Check } from 'lucide-react';

const Pricing = ({ pricingPromise }) => {
    const pricingInfo = use(pricingPromise);

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className='container mx-auto px-4'>
                <div className="pricingTitle text-center space-y-4 mb-16">
                    <h2 className='text-5xl font-bold text-slate-900 tracking-tight'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382] text-lg'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    {
                        pricingInfo.map((pricePlan, index) => {
                            const { plan, description, price, billing_cycle, features, call_to_action, is_popular } = pricePlan;

                            return (
                                <div 
                                    key={index} 
                                    className={`relative flex flex-col rounded-4xl p-10 border transition-all h-full ${
                                        is_popular 
                                        ? 'bg-[#7F2BFF] text-white border-transparent shadow-2xl shadow-purple-200' 
                                        : 'bg-white text-slate-800 border-gray-100'
                                    }`}
                                >
                                    {/* Most Popular Tag */}
                                    {is_popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFF9E5] text-[#D4A017] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm border border-yellow-100">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold mb-2">{plan}</h3>
                                        <p className={`text-sm ${is_popular ? 'text-purple-100' : 'text-gray-500'}`}>
                                            {description}
                                        </p>
                                    </div>

                                    <div className="mb-8 flex items-baseline">
                                        <span className="text-5xl font-bold tracking-tighter">${price}</span>
                                        <span className={`text-lg ml-1 font-medium ${is_popular ? 'text-purple-200' : 'text-gray-400'}`}>
                                            /{billing_cycle}
                                        </span>
                                    </div>

                                    
                                    <ul className="space-y-5 mb-10 grow">
                                        {features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className={`mt-1 rounded-full p-0.5 ${is_popular ? 'bg-white/20' : 'bg-green-50'}`}>
                                                    <Check className={`w-4 h-4 ${is_popular ? 'text-white' : 'text-green-500'}`} />
                                                </div>
                                                <span className="text-[15px] font-medium leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-full font-bold text-lg shadow-sm transition-all active:scale-[0.98] ${
                                        is_popular 
                                        ? 'bg-white text-[#7F2BFF] hover:bg-gray-200 hover:text-[#7F2BFF]' 
                                        : 'bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white hover:bg-[#6a24d6]'
                                    }`}>
                                        {call_to_action}
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;