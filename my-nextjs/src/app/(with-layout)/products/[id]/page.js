import getSingleProduct from '@/utils/getSingleProduct';
import React from 'react';

const SingleProductPage = async ({ params }) => {
    const product = await getSingleProduct(params.id)
    return (
        <div className='container mx-auto'>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
        </div>
    );
};

export default SingleProductPage;