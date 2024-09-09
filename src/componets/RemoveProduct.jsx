import React, { useState } from "react";

// Function to render the remove product page
const RemoveProduct = ({ handleClosePage2 }) => (
  <div className=" container-addremove h-screen">
    <div className="bg-yellow-600 p-4 flex flex-col gap-9 rounded-3xl">
      <div className="flex justify-end hover:text-gray-700">
        <button onClick={handleClosePage2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col justify-center items-start gap-3 ml-5 mr-5">
        <label className="text-3xl">Product Name:</label>
        <input
          className="bg-white  text-black  inline-block py-3 px-7 text-3xl rounded-2xl w-full border-none outline-none"
          type="text"
          placeholder="Product Name..."
        />
      </div>

      <div className="flex justify-center">
        <div className="bg-indigo-700 text-white hover:bg-indigo-800 inline-block py-3 px-6 text-3xl rounded-2xl cursor-pointer mb-7">
          <h1>Remove Product</h1>
        </div>
      </div>
    </div>
  </div>
);

export default RemoveProduct;
