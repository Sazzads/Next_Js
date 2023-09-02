import Link from 'next/link';
import React from 'react';

const SingleProduct = ({ product }) => {
    const { id, title, price } = product
    return (
        <div className='shadow-md shadow-gray-200 p-3'>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <Link href={`/products/${id}`}>
                <button className='btn bg-blue-400 text-white py-1 px-3 rounded-md border-black border-2 hover:bg-blue-200'>
                    Details
                </button>
            </Link>
        </div>
    );
};

export default SingleProduct;