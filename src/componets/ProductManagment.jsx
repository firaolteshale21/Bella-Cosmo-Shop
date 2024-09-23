import React, { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

const ProductManagment = ({ handleClosePage }) => {
  const [activePage, setActivePage] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch initial products from the local JSON server
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleRemoveProduct = (productId) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this product?"
    );
    if (confirmRemove) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    }
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

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!searchQuery) {
      setFilteredProducts(products); // Reset to original products if no search query
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();

      // Filter results based on the search query
      const filteredResults = data.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredProducts(filteredResults); // Update state with filtered results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="bg-gray-200">
      {activePage === null ? (
        <>
          <div className="bg-gray-200 min-h-screen container m-6 rounded-3xl p-9">
            <div className="flex justify-end hover:text-gray-700 pr-5 close ">
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
            <div className="flex justify-between items-center p-5 mb-6 add-search">
              <div
                className="bg-green-600 text-gray-100 hover:bg-green-500 inline-block py-2 text-2xl rounded-2xl w-1/5 cursor-pointer shadow-md btn-add-product"
                onClick={handleAddProductClick}
              >
                <h1>Add Product</h1>
              </div>
              <form
                className="flex justify-center items-center gap-3 w-1/2 text-2xl text-gray-900 search"
                onSubmit={handleSearch}
              >
                <input
                  className="bg-white py-2 px-5 rounded-2xl w-full border-none outline-none"
                  type="text"
                  placeholder="Search Product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="cursor-pointer text-blue-500 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {filteredProducts.map((product) => (
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
      ) : activePage === "updateProduct" ? (
        <UpdateProduct handleClosePage2={handleClosePage2} />
      ) : null}
    </div>
  );
};

export default ProductManagment;
