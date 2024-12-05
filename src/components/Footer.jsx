import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Phishr uses AI technology to detect phishing emails and keep you safe from online threats.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/About" className="text-gray-300 hover:text-blue-500">About</a></li>
              <li><a href="/Contact" className="text-gray-300 hover:text-blue-500">Contact</a></li>
              <li><a href="/" className="text-gray-300 hover:text-blue-500">Home</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">Email: <a href="mailto:example@example.com" className="text-blue-400 hover:text-blue-600">example@example.com</a></p>
            <p className="text-sm">Phone: <span className="text-blue-400 hover:text-blue-600">+1234567890</span></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">© 2024 Phishr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
