import React, { useState } from "react";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";
import UpdateProduct from "./UpdateProduct";
import imgShampoo from "../assets/shampoo2.jpg";
import imgNail from "../assets/nailPolish.jpg";

const ProductManagment = ({ handleClosePage }) => {
  const [activePage, setActivePage] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Shampoo",
      description:
        "Unleash the full potential of your hair with our Revive & Shine Nourishing Shampoo. Formulated with a blend of natural botanical extracts ",
      stock: "20",
      price: "30$",
      imgSrc: imgShampoo,
    },
    {
      id: 2,
      name: "Nail Color",
      description: "A perfect nail color to match any occasion.",
      stock: "15",
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
          <div className="bg-gray-200 min-h-screen container m-6 rounded-3xl p-9">
            <div className="flex justify-between items-center gap-10 p-5 mb-6">
              <div
                className="bg-green-600 text-gray-100 hover:bg-green-500 inline-block py-2 px- text-2xl rounded-2xl w-1/5 cursor-pointer shadow-md btn-add-product"
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
                className="bg-blue-100 mb-12 h-72 shadow-md grid grid-cols-9 gap-5 rounded-2xl overflow-hidden pm-container"
              >
                <div className="col-span-3 flex items-center justify-center p-img ">
                  <img
                    src={product.imgSrc}
                    className="object-cover w-full h-full overflow-hidden"
                    alt={product.name}
                  />
                </div>
                <div className="col-span-4  text-left py-7  flex flex-col self-center gap-4 text-gray-900 pm-text ">
                  <h1 className="text-3xl p-name">{product.name}</h1>
                  <h1 className="text-lg p-description">
                    {product.description}
                  </h1>
                  <h1 className="text-2xl p-stock">Stock: {product.stock}</h1>
                  <h1 className="text-2xl p-price">{product.price}</h1>
                </div>
                <div className="col-span-2 flex flex-col gap-3 mr-4  self-center btn-pm">
                  <div
                    className="bg-yellow-600 text-gray-100 hover:bg-yellow-700 inline-block py-2 px-2  text-2xl rounded-2xl cursor-pointer shadow-md btn-update"
                    onClick={() => handleUpdateProductClick()}
                  >
                    <h1>Update Product</h1>
                  </div>
                  <div
                    className="bg-red-600 text-gray-100 hover:bg-red-700 inline-block py-2 px-2  text-2xl rounded-2xl cursor-pointer shadow-md btn-remove"
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
