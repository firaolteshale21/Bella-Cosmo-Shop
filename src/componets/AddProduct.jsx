import React, { useState } from "react";

// Function to render the add product page
const AddProduct = ({ handleClosePage2 }) => (
  <div className="bg-gray-300">
    <div className=" container-addremove ">
      <div className="bg-gray-100 min-h-screen p-6 flex flex-col gap-9 pt-4 pb-4">
        <div className="flex justify-end text-gray-600 hover:text-gray-800">
          <button onClick={handleClosePage2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col justify-center items-start gap-3 text-2xl text-gray-900 ">
          <label className="">Product Name:</label>
          <input
            className="bg-white inline-block py-2 px-5  rounded-2xl w-full border-none outline-none pl"
            type="text"
            placeholder="Product Name..."
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 text-2xl text-gray-900 ">
          <label className="">Product Description:</label>
          <textarea
            className="bg-white inline-block py-2 px-5  rounded-2xl w-full border-none outline-none"
            type="text"
            placeholder="Description..."
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-3 text-2xl text-gray-900">
          <label className="">Product Price:</label>
          <input
            className="bg-white inline-block py-2 px-5  rounded-2xl w-full border-none outline-none"
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 text-2xl text-gray-900">
          <label className="">Stock:</label>
          <input
            className="bg-white inline-block py-2 px-5  rounded-2xl w-full border-none outline-none"
            type="number"
            placeholder="Stock Quantity..."
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 text-2xl text-gray-900 ">
          <select className="bg-green-200 hover:bg-green-300 cursor-pointer py-4 px-5  rounded-2xl w-full border-none outline-none">
            <option value="">Product Category</option>
            <option value="">Skincare Products</option>
            <option value="">Haircare Products</option>
            <option value="">Accessories</option>
          </select>
        </div>
        <div className="flex justify-center">
          <div className="bg-green-600 text-white hover:bg-green-500 inline-block py-3 px-6 text-3xl rounded-2xl cursor-pointer">
            <h1>Add Product</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddProduct;
