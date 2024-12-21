import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState(null);

  const PRODUCTS_API = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(PRODUCTS_API);
        setProducts(response.data);
      } catch (err) {
        console.error(`Error fetching data from ${PRODUCTS_API}:`, err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Books",
    "Sports",
    "Toys",
    "Groceries",
    "Beauty",
  ];

  const Home = () => (
    <header
      className="h-80 flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/597/407/HD-wallpaper-high-resolution-dark-red-background-red-aesthetic.jpg')`, // Replace with your preferred image URL
      }}
    >
      <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white font-serif tracking-wide drop-shadow-lg">
          Welcome to Baligyaan
        </h1>
        <p className="text-xl mt-4 text-gray-300 font-light font-sans">
          Your ultimate destination for quality products at great prices!
        </p>
        <button className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          Start Shopping
        </button>
      </div>
    </header>
  );
  

  const Products = () => (
    <section className="py-8 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Trending Products
      </h2>
      {loadingProducts ? (
        <p className="text-center text-gray-300">Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 12).map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform text-black"
            >
              <img
                src={product.images[0] || "placeholder-image.jpg"}
                alt={product.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-700">${product.price}</p>
                <p className="text-sm text-gray-500">{product.category.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  const Categories = () => (
    <section className="py-8 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform text-white cursor-pointer"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-center">{category}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div>
      <nav className="bg-black p-4 flex justify-center gap-6">
      <Link
      to="/"
      className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transition-all"
    >
      Home
    </Link>
    <Link
      to="/products"
      className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transition-all"
    >
      Products
    </Link>
    <Link
      to="/categories"
      className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transition-all"
    >
      Categories
    </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default LandingPage;
