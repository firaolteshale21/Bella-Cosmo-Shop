import React, { useState } from "react";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";
import UpdateProduct from "./UpdateProduct";
import imgShampoo from "../assets/shampoo.jpg";
import imgNail from "../assets/nail.jpg";

const ProductManagment = ({ handleClosePage }) => {
  const [activePage, setActivePage] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Shampoo",
      description:
        "Unleash the full potential of your hair with our Revive & Shine Nourishing Shampoo. Formulated with a blend of natural botanical extracts and advanced moisture-lock technology",
      price: "30$",
      imgSrc: imgShampoo,
    },
    {
      id: 2,
      name: "Nail Color",
      description: "A perfect nail color to match any occasion.",
      price: "15$",
      imgSrc: imgNail,
    },
  ]);

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleAddProductClick = () => {
    setActivePage("addProduct");
  };

  const handleRemoveProductClick = () => {
    setActivePage("removeProduct");
  };

  const handleUpdateProductClick = () => {
    setActivePage("updateProduct");
  };

  const handleClosePage2 = () => {
    setActivePage(null);
  };

  return (
    <div className="bg-gray-200">
      {activePage === null ? (
        <>
          <div className="bg-gray-200 container m-6 rounded-3xl p-9">
            <div className="flex justify-between items-center gap-10 p-5 mb-6">
              <div
                className="bg-green-600 text-gray-100 hover:bg-green-500 inline-block py-2 px- text-2xl rounded-2xl w-1/5 cursor-pointer shadow-md"
                onClick={handleAddProductClick}
              >
                <h1>Add Product</h1>
              </div>
              <div className="flex justify-end hover:text-gray-700">
                <button onClick={handleClosePage}>
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
            </div>

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-blue-100 mb-12 shadow-md justify-between rounded-2xl overflow-hidden flex h-72"
              >
                <div className="bg-green-600 w-2/5">
                  <img
                    src={product.imgSrc}
                    className="object-contain w-full  "
                    alt={product.name}
                  />
                </div>
                <div className="w-1/2 self-center text-left pl-7 flex flex-col gap-4">
                  <h1 className="text-3xl text-gray-900">{product.name}</h1>
                  <h1 className="text-lg text-gray-700">
                    {product.description}
                  </h1>
                  <h1 className="text-2xl text-gray-900">{product.price}</h1>
                </div>
                <div className="flex flex-col gap-3 w-1/5 self-center pr-8">
                  <div
                    className="bg-yellow-600 text-gray-100 hover:bg-yellow-700 inline-block py-2 px- text-2xl rounded-2xl cursor-pointer shadow-md"
                    onClick={() => handleUpdateProductClick()}
                  >
                    <h1>Update Product</h1>
                  </div>
                  <div
                    className="bg-red-600 text-gray-100 hover:bg-red-700 inline-block py-2 px- text-2xl rounded-2xl cursor-pointer shadow-md"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <h1>Remove Product</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : activePage === "addProduct" ? (
        <AddProduct handleClosePage2={handleClosePage2} />
      ) : activePage === "removeProduct" ? (
        <RemoveProduct handleClosePage2={handleClosePage2} />
      ) : activePage === "updateProduct" ? (
        <UpdateProduct handleClosePage2={handleClosePage2} />
      ) : null}
    </div>
  );
};

export default ProductManagment;
