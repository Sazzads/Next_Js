import { forwardRef, useRef } from "react";


const Modal = ({ closeModal, updatedata,handleSubmit }, ref) => {
    const formRef = useRef(null)
    return (
        <dialog ref={ref} className="w-[98%] max-w-[500px] rounded-md">
            <div className="text-right mb-4">
                <button 
                className="btn bg-red-600 text-white rounded-full px-3 py-1 mt-2 me-2 hover:bg-red-400"
                onClick={() => {
                    closeModal();
                    formRef.current.reset
                }}>X</button>
            </div>
            <form 
            onSubmit={handleSubmit}
            ref={formRef} className="m-3">
                <input
                    className="w-full mb-2 p-2 focus:outline-none border border-gray-500 rounded-md"
                    type="text"
                    placeholder="title"
                    name="title"
                    defaultValue={updatedata?.title}
                />
                <input
                    className="w-full mb-2 p-2 focus:outline-none border border-gray-500 rounded-md"
                    type="number"
                    placeholder="price"
                    name="price"
                    defaultValue={updatedata?.price}
                />
                <button className="text-white px-2 py-1 bg-blue-500 focus:right-2 rounded-md hover:bg-blue-300">
                    Submit
                </button>
            </form>
        </dialog>
    );
};

export default forwardRef(Modal);