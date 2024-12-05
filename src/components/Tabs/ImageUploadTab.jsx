import React, { useState } from "react";
import Auth from "../Auth";
import { useAuth } from "../../hooks/useAuth";

const ImageUploadTab = () => {
  const { user, login, logout, loading: authLoading } = useAuth();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setResult(null);
  };

  const handleRemoveImage = () => {
    setFile(null);
    setResult(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return alert("Please upload an image before submitting.");
    if (!user) return alert("You need to log in to use this feature.");

    setResult(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("emailImage", file);

      const response = await fetch("http://localhost:5000/process", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while analyzing the image.");
    } finally {
      setLoading(false);
    }
  };

  const toggleLoginMenu = () => {
    setShowLoginMenu(!showLoginMenu);
  };

  return (
    <div className="relative">
      {showLoginMenu && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Auth onClose={toggleLoginMenu}/>
        </div>
      )}

      <div className="space-y-6 mx-auto">
        {!user ? (
         <div className="">
         <p className="text-gray-800 text-lg font-medium mb-4">
           Please log in to access this feature.
         </p>
         <button
           onClick={toggleLoginMenu}
           className="w-full bg-teal-500  text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
           disabled={authLoading}
         >
           {authLoading ? (
             <span className="flex items-center justify-center">
               Logging in...
             </span>
           ) : (
             "Log In"
           )}
         </button>
       </div>
       
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="emailImage" className="block text-lg font-semibold text-gray-800 mb-3">
                Upload Email Screenshot
              </label>
              <div className="flex items-center border rounded-lg px-4 py-2 shadow-sm bg-white">
                <input
                  type="file"
                  id="emailImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex-grow">
                  {file ? (
                    <p className="text-sm text-gray-600 truncate">
                      <strong>{file.name}</strong>
                    </p>
                  ) : (
                    <p className="text-sm text-gray-400">No file selected</p>
                  )}
                </div>
                <button
                  type="button"
                  className="text-teal-500 hover:text-teal-600 focus:outline-none font-semibold text-sm"
                  onClick={() => document.getElementById("emailImage").click()}
                >
                  {file ? "Change" : "Browse"}
                </button>
                {file && (
                  <button
                    type="button"
                    className="ml-3 text-red-500 hover:text-red-600 focus:outline-none"
                    onClick={handleRemoveImage}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {file && (
              <div className="mt-4 mb-8 rounded-lg shadow-md overflow-hidden bg-gray-50">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected Preview"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "250px" }}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Upload and Check"}
            </button>

            {result && (
              <div
                className={`mt-8 inline-block px-4 py-2 text-sm font-medium rounded-lg ${
                  result === "Phishing"
                    ? "bg-red-100 text-red-700 border border-red-300"
                    : "bg-green-100 text-green-700 border border-green-300"
                }`}
              >
                {result === "Phishing" ? "This email is possibly unsafe!" : "This email appears safe!"}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ImageUploadTab;
