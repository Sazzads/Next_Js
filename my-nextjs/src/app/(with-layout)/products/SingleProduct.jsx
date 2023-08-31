import Link from 'next/link';
import React from 'react';

const SingleProduct = ({product}) => {
    const { id, title, price } = product
    return (
        <div>
            <Link href={`/products/${id}`}>{title}</Link>
        </div>
    );
};

export default SingleProduct;