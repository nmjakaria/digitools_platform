import React, { use, useState } from 'react';
import AllProducts from './AllProducts';
import CartProduct from './CartProduct';

const ProductCard = ({ productsPromise }) => {
    const products = use(productsPromise);
    const [selectedType, setSelectedType] = useState("products");
    return (
        <div className='container mx-auto'>
            <div className='mb-4 text-center space-y-4'>
                <h1 className='text-4xl font-bold '>Premium Digital Tools</h1>
                <p className='text-[#6B7280]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div>
                    <button onClick={() => { setSelectedType("products") }} className={`btn ${selectedType === 'products' ? "bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full`}>Products</button>
                    <button onClick={() => { setSelectedType("cart") }} className={`btn ${selectedType === 'cart' ? "bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full`}>Cart</button>
                </div>
            </div>
            {
                selectedType === "products" ? (
                    <AllProducts products={products}
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}></AllProducts>
                ) :
                    (
                        <CartProduct
                            products={products}
                            selectedType={selectedType}
                            setSelectedType={setSelectedType}></CartProduct>
                    )
            }
        </div>
    );
};

export default ProductCard;