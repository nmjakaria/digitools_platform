import React from 'react';
import Card from '../UI/Card';

const AllProducts = ({ products, selectedProducts, setSelectedProducts }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {
                products.map((product, index) => <Card
                    key={index}
                    product={product}
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts} ></Card>)
            }
        </div>
    );
};

export default AllProducts;