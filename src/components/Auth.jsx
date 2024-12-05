/**
 * Author: Alex Edgar
 * Written: 4/12/24
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../hooks/useAuth";

const Auth = ({ onClose }) => {
  //const { user, login, signup } = useAuth(); // Assuming these methods exist in useAuth
  const user = null;
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home"); // Redirect if logged in
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    /*e.preventDefault();
    setError(null);

    try {
      if (isSignUp) {
        await signup(formData.email, formData.password);
      } else {
        await login(formData.email, formData.password);
      }
      navigate("/home"); // Redirect after successful login/signup
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }*/
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent click events on the modal from closing it
      >
        <button
          onClick={onClose}
          className="absolute text-2xl top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isSignUp
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-teal-500 hover:underline focus:outline-none"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
