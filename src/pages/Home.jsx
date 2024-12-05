/**
 * Author: Alex Edgar
 * Written: 01/12/24
 */

import React, { useState } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Tabs from '../components/Tabs';

const Home = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('uploadImage');
  const [copiedText, setCopiedText] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleRemoveImage = () => {
    setFile(null);
  };

  const handleTabChange = (tabName) => {
    setTab(tabName);
    setResult(null); // Reset the result when switching tabs
    setCopiedText(''); // Clear copied text
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      let response;
      if (tab === 'uploadImage' && file) {
        const formData = new FormData();
        formData.append("emailImage", file);
        response = await fetch('http://localhost:5000/api/check-phish', {
          method: 'POST',
          body: formData,
        });
      } else if (tab === 'copyText' && copiedText) {
        response = await fetch('http://localhost:5000/api/check-phish-text', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: copiedText }),
        });
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100">

      <Banner />      
      {/* Main Functionality */}
      <Tabs />

      {/* Statistics Grid (Cubes) */}
      <div className="bg-gray-100 pb-10">
        <div className="container mx-auto px-4 p-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-500">500K+</h3>
              <p className="text-gray-700">Users Worldwide</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-500">98%</h3>
              <p className="text-gray-700">Phishing Detection Accuracy</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-500">10M+</h3>
              <p className="text-gray-700">Emails Analyzed</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-500">24/7</h3>
              <p className="text-gray-700">Continuous Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
