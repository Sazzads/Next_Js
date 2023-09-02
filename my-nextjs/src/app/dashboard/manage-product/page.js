import getAllProducts from '@/utils/getAllProducts';
import React from 'react';
import ManageProduct from './ManageProduct';
export const metadata={
    title:"Manage Products | DashBoard | Next hero",
    description:"Next Hero"
}

const ManageProductPage =async () => {
    const products=await getAllProducts()
    return (
        <div className='w-full mt-10'>
            <h1 className='mb-5 text-2xl font-semibold'>manage product page</h1>
            
            <ManageProduct products={products}></ManageProduct>
        </div>
    );
};

export default ManageProductPage;