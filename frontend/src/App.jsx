import React from "react";
import { FaRegBookmark, FaHome, FaPlus, FaYoutube, FaGithub, FaDiscord } from "react-icons/fa";

const contests = {
  upcoming: [
    {
      id: 1,
      platform: "Codeforces",
      title: "Codeforces Round #925",
      date: "March 15, 2025 14:30 UTC",
      timeLeft: "Starts in 2 days 4 hours",
    },
    {
      id: 2,
      platform: "LeetCode",
      title: "LeetCode Weekly Contest 386",
      date: "March 16, 2025 10:30 UTC",
      timeLeft: "Starts in 3 days 0 hours",
    },
  ],
  past: [
    {
      id: 3,
      platform: "CodeChef",
      title: "CodeChef Starters 120",
      date: "March 10, 2025 14:30 UTC",
      solutionLink: "#",
    },
  ],
};

const Header = () => (
  <header className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-900 text-gray-100 shadow-md">
    <h1 className="text-xl font-semibold">
      <span className="text-purple-400">&lt;/&gt;</span> ContestTracker
    </h1>
    <nav className="flex gap-6 text-gray-300">
      <a href="#" className="flex items-center gap-2 hover:text-white transition">
        <FaHome /> Home
      </a>
      <a href="#" className="flex items-center gap-2 hover:text-white transition">
        <FaRegBookmark /> Bookmarked
      </a>
      <a href="#" className="flex items-center gap-2 hover:text-white transition">
        <FaPlus /> Add Solution
      </a>
    </nav>
  </header>
);


const FilterBar = () => (
  <div className="p-4 bg-gray-800 text-gray-100 shadow-md border border-gray-700">
    <p className="font-medium mb-3 text-gray-200">Filter Platforms:</p>
    <div className="flex gap-6">
      {['Codeforces', 'CodeChef', 'LeetCode'].map((platform) => (
        <label key={platform} className="flex items-center gap-2 cursor-pointer hover:text-white transition">
          <input type="checkbox" className="accent-purple-500" /> {platform}
        </label>
      ))}
    </div>
  </div>
);

const ContestCard = ({ contest, isPast = false }) => (
  <div className="p-4 border border-gray-700 rounded-xl shadow-md bg-gray-900 w-full max-w-sm text-gray-100">
    <div className="flex items-center justify-between">
      <p className="font-semibold text-gray-100">
        {isPast ? '💡' : '🏆'} {contest.title}
      </p>
      {!isPast && <FaRegBookmark className="text-gray-400 hover:text-white transition" />}
    </div>
    <p className="text-sm text-gray-400 mt-1">{contest.date}</p>
    <p className="text-sm text-gray-300 mt-1">
      {isPast ? '' : contest.timeLeft}
    </p>
    <span
      className={`inline-block mt-2 text-xs px-2 py-1 rounded-full text-white ${
        contest.platform === 'Codeforces'
          ? 'bg-blue-600'
          : contest.platform === 'LeetCode'
          ? 'bg-yellow-500 text-black'
          : 'bg-red-600'
      }`}
    >
      {contest.platform}
    </span>
    {contest.solutionLink && (
      <a
        href={contest.solutionLink}
        className="block mt-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        ▶ Watch Solution
      </a>
    )}
  </div>
);

const AddSolutionCard = () => (

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
);


const Footer = () => (
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
);

const App = () => (
  <div className="bg-gray-950 min-h-screen font-sans text-gray-100">
  <Header />
  <FilterBar />

  <div className="p-4 space-y-12 max-w-7xl mx-auto">
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-white">Upcoming Contests</h2>
      <div className="flex flex-wrap gap-4">
        {contests.upcoming.map((contest) => (
          <ContestCard key={contest.id} contest={contest} />
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4 text-white">Past Contests</h2>
      <div className="flex flex-wrap gap-4">
        {contests.past.map((contest) => (
          <ContestCard key={contest.id} contest={contest} isPast />
        ))}
      </div>
    </section>

    <AddSolutionCard />
  </div>

  <Footer />
</div>

);

export default App;
