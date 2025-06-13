// components/Modal.jsx
'use client';

import React from 'react';

export default function Modal({ formData, setFormData, errors, onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Please enter your details:</h2>

        {errors.length > 0 && (
          <div className="mb-3 text-red-500">
            <ul className="list-disc pl-5">
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="block mb-1 font-medium">Name or Company Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              value={formData.userEmail}
              onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit & Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
