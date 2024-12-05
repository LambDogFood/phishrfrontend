/**
 * Author: Alex Edgar
 * Written: 03/12/24
 */

import React, { useState } from "react";
import ImageUploadTab from "./Tabs/ImageUploadTab";
import PasteTextTab from "./Tabs/PasteTextTab";

const Tabs = () => {

  const tabs = [
    {id:"uploadImage", label:"Upload Image"},
    {id:"pasteText", label:"Paste Text"},
  ]

  const tabComponents = {
    uploadImage: <ImageUploadTab />,
    pasteText: <PasteTextTab />,
  }

  const [currentTab, setCurrentTab] = useState(Object.keys(tabComponents)[0]);
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-4xl flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 py-3 text-lg font-semibold text-gray-800 ${
                currentTab === tab.id ? "border-b-4 border-blue-500" : ""
              } hover:text-blue-500 transition duration-300`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Check Email Phishing</h2>
          {tabComponents[currentTab]}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
