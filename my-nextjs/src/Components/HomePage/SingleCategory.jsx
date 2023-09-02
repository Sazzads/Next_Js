import Link from 'next/link';
import React from 'react';

const SingleCategory = ({ category }) => {
    const { id, name } = category
    return (
        <Link 
        href={`/products?categoryId=${id}`}
        >
            <h1 className='border-2 p-2 border-black shadow-stone-700 shadow-sm hover:bg-slate-500'>{name}</h1>
        </Link>
    );
};

export default SingleCategory;
