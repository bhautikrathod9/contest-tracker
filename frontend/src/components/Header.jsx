import React, { useState } from 'react';
import { FaHome, FaRegBookmark, FaPlus, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-900 text-gray-100 shadow-md">
      <h1 className="text-xl font-semibold">
        <span className="text-purple-400">&lt;/&gt;</span> ContestTracker
      </h1>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className={`flex-col md:flex md:flex-row md:gap-6 text-gray-300 absolute md:static bg-gray-900 w-full md:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16 left-0' : 'top-[-100%]'}`}>
        <a href="#" className="flex items-center gap-2 p-2 hover:text-white transition">
          <FaHome /> Home
        </a>
        <a href="#" className="flex items-center gap-2 p-2 hover:text-white transition">
          <FaRegBookmark /> Bookmarked
        </a>
        <a href="#" className="flex items-center gap-2 p-2 hover:text-white transition">
          <FaPlus /> Add Solution
        </a>
      </nav>
    </header>
  );
};

export default Header;