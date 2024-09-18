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
          <div className="  min-h-screen  container m-6 pt-5 pb-5 pl-7 pr-7  ">
            <div className="flex justify-end items-center mb-8 mr-8 ">
              <div className="bg-blue-500 w-20 h-20 text-white hover:bg-blue-600 text-xl cursor-pointer flex justify-center items-center rounded-full">
                <h1 className="mb-1">Logout</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 p-5 mb-6 text-gray-900 text-2xl btn-admin">
              <div
                className="bg-white hover:bg-gray-300  py-2 px-6  w-3/4 rounded-2xl cursor-pointer shadow-md btn-pm"
                onClick={handleProductManagmentClick}
              >
                <h1>Product Managment</h1>
              </div>

              <div
                className="bg-green-300 hover:bg-green-400  py-2 rounded-2xl w-1/5 cursor-pointer shadow-md btn-add-admin"
                onClick={handleAddAdminClick}
              >
                <h1>Add Admin</h1>
              </div>
              <div
                className="bg-green-300 hover:bg-green-400  py-2  rounded-2xl w-1/5 cursor-pointer shadow-md btn-users"
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

            <div className="bg-blue-100 text-left mb-5 shadow-md rounded-2xl overflow-hidden text-gray-900  text-2xl  orders-card  heading-grid">
              <div className="bg-white flex justify-start heading-flex  gap-2 p-5 orders-heading ">
                <div className="w-full">
                  <h1>Username</h1>
                </div>
                <div className="w-full ">
                  <h1>Phone Number</h1>
                </div>
                <div className="w-full product">
                  <h1>Product</h1>
                </div>
                <div className="w-full">
                  <h1>Quantity</h1>
                </div>
                <div className="w-full">
                  <h1>Total Price</h1>
                </div>
              </div>

              <div className="flex  justify-start heading-flex  gap-2  p-5 orders-list ">
                <div className="w-full    ">
                  <h1>Abebe</h1>
                </div>
                <div className="w-full   ">
                  <h1>+251964783457</h1>
                </div>
                <select className="w-full product product-list gap-4 p-2 inline-block mr-6 bg-blue-200 rounded-lg border-0 outline-0 hover:bg-blue-300">
                  <option value="">Product List</option>
                  <option className="product-item">Shampoo</option>
                  <option className="product-item">Hair oil</option>
                  <option className="product-item">Face wash</option>
                  <option className="product-item">Body Spray</option>
                </select>
                <div className="w-full  ">
                  <h1>4</h1>
                </div>
                <div className="w-full   ">
                  <h1>90$</h1>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 text-left mb-5 shadow-md rounded-2xl overflow-hidden text-gray-900  text-2xl orders-card  heading-grid">
              <div className="bg-white flex justify-start heading-flex  gap-2 p-5 orders-heading ">
                <div className="w-full">
                  <h1>Username</h1>
                </div>
                <div className="w-full ">
                  <h1>Phone Number</h1>
                </div>
                <div className="w-full product">
                  <h1>Product</h1>
                </div>
                <div className="w-full">
                  <h1>Quantity</h1>
                </div>
                <div className="w-full">
                  <h1>Total Price</h1>
                </div>
              </div>

              <div className="flex  justify-start heading-flex  gap-2  p-5 orders-list ">
                <div className="w-full    ">
                  <h1>Meron</h1>
                </div>
                <div className="w-full   ">
                  <h1>+251959913457</h1>
                </div>
                <select className="w-full product product-list gap-4 p-2 inline-block mr-6 bg-blue-200 rounded-lg border-0 outline-0 hover:bg-blue-300">
                  <option value="">Product List</option>
                  <option className="product-item">Nail Color</option>
                  <option className="product-item">Eye Liner</option>
                  <option className="product-item">Lipstick</option>
                </select>
                <div className="w-full  ">
                  <h1>3</h1>
                </div>
                <div className="w-full   ">
                  <h1>90$</h1>
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
