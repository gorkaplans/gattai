import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";


const Nav = (basename) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-beige-gattai p-6 border-b border-solid border-black mx-4">
      <div className="flex items-center flex-shrink-0 text-blue-gattai mr-6">
        <Link to="/">
         <p className="font-larken text-xl">TheGattaiProject</p>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-blue-gattai border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full block lg:flex lg:items-center lg:w-auto `}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/Galeria"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-gattai hover:text-white mr-4"
          >
            Galeria
          </Link>
          <Link
            to="/About"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-gattai hover:text-white mr-4"
          >
            Nosotros
          </Link>
          <Link
            to="/Contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-gattai hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
