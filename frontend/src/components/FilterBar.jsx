import React from 'react';

function FilterBar() {
  return (
    <div className="p-4 bg-gray-800 text-gray-100 shadow-md border border-gray-700">
      <p className="font-medium mb-3 text-gray-200">Filter Platforms:</p>
      <div className="flex flex-wrap gap-4 md:gap-6">
        {['Codeforces', 'CodeChef', 'LeetCode'].map((platform) => (
          <label key={platform} className="flex items-center gap-2 cursor-pointer hover:text-white transition">
            <input type="checkbox" className="accent-purple-500" /> {platform}
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;