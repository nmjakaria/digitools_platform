import React from 'react';
import { MdOutlinePersonAddAlt } from 'react-icons/md';

const EmptySelectedState = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-gray-50 border-2 border-dashed border-gray-200 rounded-4xl text-center">
            <div className="bg-white p-6 rounded-full shadow-sm mb-6 text-gray-400">
                <MdOutlinePersonAddAlt className="text-6xl" />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No Product Selected Yet!
            </h2>
            <p className="text-gray-500 max-w-xs mx-auto text-lg leading-relaxed">
                Your cart is looking a bit empty. Go to the <span className="font-semibold text-black">Products</span> tab to start building your collection.
            </p>
        </div>
    );
};

export default EmptySelectedState;