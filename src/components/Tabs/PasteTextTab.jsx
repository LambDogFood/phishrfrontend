/**
 * Author: Alex Edgar
 * Written: 02/12/24
 */

import React from "react";

const PasteTextTab = ({ text, onTextChange }) => (
  <div>
    <div className="mb-6">
      <label
        htmlFor="emailText"
        className="block text-lg font-semibold text-gray-800 mb-3"
      >
        Paste Email Text
      </label>
      <textarea
        id="emailText"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Paste the email text here..."
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="6"
      />
    </div>
  </div>
);

export default PasteTextTab;
