import React from 'react';
import { MdDelete } from 'react-icons/md';
import EmptySelectedState from '../EmptySelectedState/EmptySelectedState';
import { toast } from 'react-toastify';

const CartProduct = ({ selectedProducts, setSelectedProducts }) => {
    const total = selectedProducts.reduce((sum, item) => sum + item.price, 0);

    const handleDeleteSelectedProduct = (product) => {
        const filtered = selectedProducts.filter(
            item => item.id !== product.id
        );
        setSelectedProducts(filtered);
        toast.error(`${product.name} removed`, {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
        });
    };
    const handleCheckout = () => {
        setSelectedProducts([]);

        toast.success("✅ Checkout successful!", {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
        });
    };

    return (
        <div>
            {
                selectedProducts.length === 0 ? (
                    <EmptySelectedState />
                ) : (
                    <>
                        {
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
                        }

                        <div className="flex justify-between items-center mt-6 p-4 bg-white rounded-2xl">
                            <h2 className="text-lg font-bold text-gray-800">
                                Total:
                            </h2>
                            <h2 className="text-lg font-bold text-gray-800">
                                ${total}
                            </h2>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full mt-4 p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl shadow-lg hover:opacity-90 transition"
                        >
                            Proceed to Checkout
                        </button>
                    </>
                )
            }
        </div>
    );
};

export default CartProduct;