import React, { useState } from "react";

// Function to render the update product page
const UpdateProduct = ({ handleClosePage2, product }) => {
  // Set up state to hold the updated product details
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  // Handle form submission
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/products/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const result = await response.json();
      alert(result.message); // Show success message

      // Optionally close the update form after successful update
      handleClosePage2();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  return (
    <div className="bg-gray-300">
      <div className=" container-addremove ">
        <div className="bg-gray-100 min-h-screen p-8 flex flex-col gap-9 pt-4 pb-4">
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

          <form onSubmit={handleUpdateProduct} className="flex flex-col gap-5">
            <div className="flex flex-col justify-center items-start gap-3">
              <label className="text-2xl">New Product Name:</label>
              <input
                className="bg-white text-black inline-block py-2 px-5 text-2xl rounded-2xl w-full border-none outline-none"
                type="text"
                name="name"
                value={updatedProduct.name}
                onChange={handleInputChange}
                placeholder="Product Name..."
              />
            </div>

            <div className="flex flex-col justify-center items-start gap-3">
              <label className="text-2xl">New Product Description:</label>
              <textarea
                className="bg-white text-black inline-block py-2 px-5 text-2xl rounded-2xl w-full border-none outline-none"
                type="text"
                name="description"
                value={updatedProduct.description}
                onChange={handleInputChange}
                placeholder="Description..."
              />
            </div>

            <div className="flex flex-col justify-center items-start gap-3">
              <label className="text-2xl">New Product Price:</label>
              <input
                className="bg-white text-black inline-block py-2 px-5 text-2xl rounded-2xl w-full border-none outline-none"
                type="number"
                name="price"
                value={updatedProduct.price}
                onChange={handleInputChange}
                placeholder="Price"
              />
            </div>

            <div className="flex flex-col justify-center items-start gap-3">
              <label className="text-2xl">Stock:</label>
              <input
                className="bg-white text-black inline-block py-2 px-5 text-2xl rounded-2xl w-full border-none outline-none"
                type="number"
                name="stock"
                value={updatedProduct.stock}
                onChange={handleInputChange}
                placeholder="Stock Quantity..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white hover:bg-green-500 inline-block py-3 px-6 text-3xl rounded-2xl cursor-pointer"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
