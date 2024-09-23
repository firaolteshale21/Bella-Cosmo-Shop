import React, { useState } from "react";

import AddAdmin from "../componets/AddAdmin";
import ProductManagment from "../componets/ProductManagment";
import Users from "../componets/Users";

const AdminDashBoard = () => {
  const [activePage, setActivePage] = useState(null);

  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: 1,
      username: "Abebe",
      phoneNumber: "+251964783457",
      products: ["Shampoo", "Hair oil", "Face wash", "Body Spray"],
      quantity: [4, 6, 3, 2],
      price: [5, 7, 12, 20],
      totalPrice: "44$",
    },
    {
      id: 2,
      username: "Meron",
      phoneNumber: "+251959913457",
      products: ["Nail Color", "Eye Liner", "Lipstick"],
      quantity: [3, 5, 2],
      price: [4, 8, 5],
      totalPrice: "21$",
    },
  ]);

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
        <div className="min-h-screen container m-6 pt-5 pb-5 pl-7 pr-7">
          <div className="flex justify-end items-center mb-8 mr-8">
            <div className="bg-blue-500 w-20 h-20 text-white hover:bg-blue-600 text-xl cursor-pointer flex justify-center items-center rounded-full">
              <h1 className="mb-1">Logout</h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 p-5 mb-6 text-gray-900 text-2xl btn-admin">
            <div
              className="bg-white hover:bg-gray-300 py-2 px-6 w-3/4 rounded-2xl cursor-pointer shadow-md btn-pm"
              onClick={handleProductManagmentClick}
            >
              <h1>Product Management</h1>
            </div>
            <div
              className="bg-green-300 hover:bg-green-400 py-2 rounded-2xl w-1/5 cursor-pointer shadow-md btn-add-admin"
              onClick={handleAddAdminClick}
            >
              <h1>Add Admin</h1>
            </div>
            <div
              className="bg-green-300 hover:bg-green-400 py-2 rounded-2xl w-1/5 cursor-pointer shadow-md btn-users"
              onClick={handleUsersClick}
            >
              <h1>Users</h1>
            </div>
          </div>

          <div className="flex justify-start items-start p-5">
            <div className="w-full text-gray-900 text-3xl mb-5">
              <h1 className="text-left">ORDERS</h1>
            </div>
          </div>

          {orders.map((order) => {
            const totalPrice = order.quantity.reduce((total, qty, index) => {
              return total + qty * order.price[index];
            }, 0);

            return (
              <div
                key={order.id}
                className="bg-blue-100 text-left mb-5 shadow-md rounded-2xl overflow-hidden text-gray-900 text-2xl orders-card "
              >
                <div className=" flex flex-col heading-grid">
                  {/* Header */}
                  <div className="bg-white flex justify-start heading-flex gap-6 p-5 orders-heading">
                    <div className="w-full">
                      <h1>Username</h1>
                    </div>
                    <div className="w-full ">
                      <h1>Phone Number</h1>
                    </div>
                    <div className="w-full product ">
                      <h1>Product</h1>
                    </div>
                    <div className="w-full">
                      <h1>Quantity</h1>
                    </div>
                    <div className="w-full">
                      <h1>Price</h1>
                    </div>
                    <div className="w-full">
                      <h1>Total Price</h1>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="flex justify-start heading-flex gap-6 p-5 orders-list">
                    <div className="w-full">
                      <h1>{order.username}</h1>
                    </div>
                    <div className="w-full ">
                      <h1>{order.phoneNumber}</h1>
                    </div>

                    <ul className="flex flex-col gap-3 w-full product lists product-items">
                      {order.products.map((product, index) => (
                        <li key={index} className="li">
                          {product}
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-col gap-3 w-full lists product-items">
                      {order.quantity.map((quantity, index) => (
                        <li key={index} className="li">
                          {quantity}
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-col gap-3 w-full lists product-items">
                      {order.quantity.map((quantity, index) => (
                        <li key={index} className="li">
                          {order.price[index] * quantity} $
                        </li>
                      ))}
                    </ul>
                    <div className="w-full">
                      <h1>{totalPrice} $</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
