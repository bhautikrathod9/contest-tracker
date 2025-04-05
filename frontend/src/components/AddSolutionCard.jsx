import React from 'react'

function AddSolutionCard() {
  return (
    <div className="flex justify-center">
        <div className="p-6 border border-gray-700 rounded-xl shadow-md bg-gray-900 w-full max-w-xl mt-8 text-gray-100">
        <h2 className="font-semibold text-lg mb-4 text-gray-100">Add Solution Link</h2>
        
        <label className="block mb-2 text-sm text-gray-300">Select Contest</label>
        <select className="w-full bg-gray-800 border border-gray-700 text-gray-100 px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>CodeChef Starters 120</option>
        </select>

        <label className="block mb-2 text-sm text-gray-300">YouTube Solution Link</label>
        <input
            type="text"
            placeholder="https://youtube.com/..."
            className="w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
            Add Solution
        </button>
        </div> 
    </div>
  )
}

export default AddSolutionCard