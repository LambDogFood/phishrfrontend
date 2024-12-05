import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-wide">
          Phishr
        </div>
        
        <div className="space-x-6 text-lg font-semibold ml-auto flex items-center">
          <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-gray-200 transition duration-300">Contact</Link>

          <Link to="/auth" className="hover:text-gray-200 rounded-full">
            <FaUserCircle className="text-3xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
