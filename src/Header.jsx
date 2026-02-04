import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-gray-800">
                MyShop
              </a>
            </div>

            <nav className="hidden md:flex space-x-4">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
            <AddToCart />
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
