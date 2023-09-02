'use client'
import { useRef, useState } from "react";
import Modal from "@/Components/Modal";
import ManageSingleProduct from "../manage-product/ManageSingleProduct";
import useProducts from "@/hooks/useProducts";

const AllProducts = () => {
    const { products, isLoading, isValidating, mutate } = useProducts()

    const modalRef = useRef(null)
    const [updatedata, setUpdateData] = useState(null)

    const openModal = (product) => {
        setUpdateData(product)
        modalRef.current.showModal()
    }
    const closeModal = (product) => {
        setUpdateData(null)
        modalRef.current.close()
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const price = form.price.value
        const data = { title, price }
        if (title && price) {

            try {
                const res = await fetch(`http://localhost:5000/products/${updatedata?.id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                const result = await res.json();
                console.log(result);

                form.reset()
                closeModal()

            } catch (error) {

                console.log(error);
            }
        }
    }
    const handleDelete = async (id) => {

        const res = await fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
        const result = await res.json();
        console.log(result);
    }
    return (
        <div>
            {isLoading && <h1 className="text-center text-2xl font-semibold">Loading....</h1>}
            {
                !isLoading &&
                <table className={`border-collapse w-full ${isValidating ? "opacity-50" : "opacity-100"}`}>
                    <thead>
                        <tr>
                            <td className="border border-slate-400">Title</td>
                            <td className="border border-slate-400">Price</td>
                            <td className="border border-slate-400">Update</td>
                            <td className="border border-slate-400">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (
                                <ManageSingleProduct
                                    openModal={openModal}
                                    key={product.id}
                                    product={product}
                                    handleDelete={handleDelete}></ManageSingleProduct>
                            ))
                        }
                    </tbody>
                </table>
            }
            <Modal handleSubmit={handleSubmit} ref={modalRef} closeModal={closeModal} updatedata={updatedata}></Modal>
        </div>
    );
};

export default AllProducts;