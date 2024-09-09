import React, { useState } from "react";

// Function to render the add product page
const UpdateUser = ({ handleClosePage2 }) => (
  <div className="bg-gray-300">
    <div className=" container-addremove ">
      <div className="bg-gray-100  h-screen p-4 flex flex-col gap-9 pt-20 pb-20">
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

        <div className="flex flex-col justify-center items-start gap-3">
          <label className="text-3xl">New User Name:</label>
          <input
            className="bg-white  text-black  inline-block py-3 px-7 text-3xl rounded-2xl w-full border-none outline-none pl"
            type="text"
            placeholder="Product Name..."
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-3">
          <label className="text-3xl">New User Phone Number:</label>
          <input
            className="bg-white  text-black  inline-block py-3 px-7 text-3xl rounded-2xl w-full border-none outline-none"
            type="tel"
            placeholder="Phone Number..."
          />
        </div>
        <div className="flex justify-center">
          <div className="bg-green-600 text-white hover:bg-green-500 inline-block py-3 px-6 text-3xl rounded-2xl cursor-pointer">
            <h1>Update</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UpdateUser;
