import React, { useState } from "react";

import AddAdmin from "../componets/AddAdmin";
import ProductManagment from "../componets/ProductManagment";
import Users from "../componets/Users";

const AdminDashBoard = () => {
  const [activePage, setActivePage] = useState(null);

  const handleProductManagmentClick = () => {
    setActivePage("productManagment");
  };

  const handleAddAdminClick = () => {
    setActivePage("addAdmin");
  };

  const handleUsersClick = () => {
    setActivePage("users");
  };

  const handleClosePage = () => {
    setActivePage(null);
  };

  return (
    <div className="bg-gray-200">
      {activePage === null ? (
        <>
          <div className="bg-gray-200  container m-6 pt-5 pb-5 pl-7 pr-7">
            <div className="flex justify-end items-center mb-8 mr-8 ">
              <div className="bg-blue-500 w-20 h-20 text-white hover:bg-blue-600 text-xl cursor-pointer flex justify-center items-center rounded-full">
                <h1 className="mb-1">Logout</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 p-5 mb-6">
              <div
                className="bg-white  text-gray-900  hover:bg-gray-300 inline-block py-2 px-6 text-2xl w-3/4 rounded-2xl cursor-pointer shadow-md"
                onClick={handleProductManagmentClick}
              >
                <h1>Product Managment</h1>
              </div>

              <div
                className="bg-green-300 text-gray-900  hover:bg-green-400 inline-block py-2 px- text-2xl rounded-2xl w-1/5 cursor-pointer shadow-md"
                onClick={handleAddAdminClick}
              >
                <h1>Add Admin</h1>
              </div>
              <div
                className="bg-green-300 text-gray-900  hover:bg-green-400 inline-block py-2 px- text-2xl rounded-2xl w-1/5 cursor-pointer shadow-md"
                onClick={handleUsersClick}
              >
                <h1>Users</h1>
              </div>
            </div>

            <div className="flex justify-start items-start p-5">
              <div className=" w-full text-gray-900 text-3xl mb-5  ">
                <h1 className="text-left">ORDERS</h1>
              </div>
            </div>

            <div className="bg-blue-100 mb-12 shadow-md rounded-2xl overflow-hidden">
              <div className="bg-white flex justify-center items-center gap-2 ">
                <div className=" text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Username</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Phone Number</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left ">Product</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left ">Quantity</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Total Price</h1>
                </div>
              </div>

              <div className=" flex justify-center items-start gap-2 ">
                <div className=" text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Abebe</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">+251964783457</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5 flex flex-col gap-4">
                  <h1 className="text-left">Shampoo</h1>
                  <h1 className="text-left">Hair oil</h1>
                  <h1 className="text-left">Face wash</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">3</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">90$</h1>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 mb-12 shadow-md rounded-2xl overflow-hidden">
              <div className="bg-white flex justify-center items-center gap-2 ">
                <div className=" text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Username</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Phone Number</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left ">Product</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left ">Quantity</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Total Price</h1>
                </div>
              </div>

              <div className=" flex justify-center items-start gap-2 ">
                <div className=" text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">Meron</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">+251927363457</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5 flex flex-col gap-4">
                  <h1 className="text-left">Nail Color</h1>
                  <h1 className="text-left">Hair oil</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">2</h1>
                </div>
                <div className="text-gray-900  text-2xl  w-full p-5">
                  <h1 className="text-left">50$</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : activePage === "productManagment" ? (
        <ProductManagment handleClosePage={handleClosePage} />
      ) : activePage === "addAdmin" ? (
        <AddAdmin handleClosePage={handleClosePage} />
      ) : activePage === "users" ? (
        <Users handleClosePage={handleClosePage} />
      ) : null}
    </div>
  );
};

export default AdminDashBoard;
