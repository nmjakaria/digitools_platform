import React from 'react';
import { Sparkles, Check } from 'lucide-react';

const Card = ({ product }) => {
    console.log(product);
    const { name, description, price, period, tag, tagType, features, icon } = product;

    // Logic for Tag Colors
    const getTagStyles = (type) => {
        switch (type) {
            case 'best-seller': return 'bg-[#FEF3C7] text-[#D97706]';
            case 'popular': return 'bg-[#EDE9FE] text-[#7C3AED]';
            case 'new': return 'bg-[#DCFCE7] text-[#16A34A]';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="card w-full bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2.5rem] p-8 relative flex flex-col h-full">

            <div className="flex justify-between items-start mb-6">
                <div className="bg-[#F9FAFB] w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-50">
                    {icon}
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getTagStyles(tagType)}`}>
                    {tag}
                </span>
            </div>

            {/* Content */}
            <div className="grow">
                <h2 className="text-2xl font-extrabold text-[#111827] mb-2">
                    {name}
                </h2>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-3xl font-black text-[#111827]">${price}</span>
                    <span className="text-[#9CA3AF] font-medium text-sm capitalize">
                        /{period === 'monthly' ? 'Mo' : period}
                    </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-[#4B5563]">
                            <div className="shrink-0 w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                                <Check size={12} className="text-[#16A34A]" strokeWidth={4} />
                            </div>
                            <span className="text-sm font-semibold">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action Button  */}
            <div className="mt-auto">
                <button className="w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all duration-300 
                    bg-linear-to-l from-[#4F39F6] to-[#9514FA] 
                    hover:shadow-purple-500/40 hover:-translate-y-1 active:scale-95">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default Card;