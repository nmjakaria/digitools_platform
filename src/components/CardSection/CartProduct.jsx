import React from 'react';
import { MdDelete } from 'react-icons/md';
import EmptySelectedState from '../EmptySelectedState/EmptySelectedState';

const CartProduct = ({ selectedProducts, setSelectedProducts }) => {

    const handleDeleteSelectedProduct = (product) => {
        const filtered = selectedProducts.filter(
            item => item.id !== product.id
        );
        setSelectedProducts(filtered);
    };

    return (
        <div>
            {
                selectedProducts.length === 0 ? (
                    <EmptySelectedState />
                ) : (
                    selectedProducts.map((product) => {
                        const { id, name, price, icon } = product;

                        return (
                            <div key={id}>
                                <div className="flex items-center justify-between bg-white border border-gray-100 shadow-sm p-4 rounded-2xl mb-4">

                                    <div className="flex items-center gap-4">

                                        <div className="bg-[#F9FAFB] w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-50">
                                            {icon}
                                        </div>

                                        <div>
                                            <h3 className="text-gray-800 font-semibold">{name}</h3>
                                            <p className="text-gray-500">${price}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleDeleteSelectedProduct(product)}
                                        className="btn btn-ghost hover:bg-transparent text-red-400 hover:text-red-600 p-2"
                                    >
                                        <MdDelete className="text-2xl" />
                                    </button>

                                </div>
                            </div>
                        );
                    })
                )
            }
        </div>
    );
};

export default CartProduct;