import React from 'react'
import {FaYoutube, FaGithub, FaDiscord} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 p-6 mt-16 border-t border-gray-700">
    <div className="flex justify-between flex-wrap gap-8 max-w-6xl mx-auto">
      <div>
        <h3 className="font-semibold text-lg mb-2 text-white">ContestTracker</h3>
        <p className="text-sm text-gray-400 max-w-xs">
          Track and prepare for programming contests across multiple platforms.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2 text-white">Resources</h3>
        <ul className="text-sm space-y-1 text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Solution Playlists</li>
          <li className="hover:text-white cursor-pointer transition">Practice Problems</li>
          <li className="hover:text-white cursor-pointer transition">Contest Calendar</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2 text-white">Follow Us</h3>
        <div className="flex gap-4 text-xl text-gray-400">
          <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
          <a href="#" className="hover:text-white transition"><FaGithub /></a>
          <a href="#" className="hover:text-indigo-400 transition"><FaDiscord /></a>
        </div>
      </div>
    </div>

    <p className="text-center text-sm text-gray-500 mt-8">
      © 2025 ContestTracker. All rights reserved.
    </p>
  </footer>
  )
};

export default Footer