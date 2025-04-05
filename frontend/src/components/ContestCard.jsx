import React from 'react'
import {FaRegBookmark} from 'react-icons/fa'

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

const ContestCard = ({ contest, isPast = false }) => (
    <div className="p-4 border border-gray-700 rounded-xl shadow-md bg-gray-900 w-full max-w-sm text-gray-100 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <p className="font-semibold text-gray-100 transition-colors duration-300">
        {isPast ? '💡' : '🏆'} {contest.title}
      </p>
      {!isPast && (
        <FaRegBookmark className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" />
      )}
    </div>
    <p className="text-sm text-gray-400 mt-1 transition-colors duration-300">{contest.date}</p>
    <p className="text-sm text-gray-300 mt-1 transition-opacity duration-300">
      {isPast ? '' : contest.timeLeft}
    </p>
    <span
      className={`inline-block mt-2 text-xs px-2 py-1 rounded-full text-white transition-colors duration-300 ${
        contest.platform === 'Codeforces'
          ? 'bg-blue-600 hover:bg-blue-500'
          : contest.platform === 'LeetCode'
          ? 'bg-yellow-500 text-black hover:bg-yellow-400'
          : 'bg-red-600 hover:bg-red-500'
      }`}
    >
      {contest.platform}
    </span>
    {contest.solutionLink && (
      <a
        href={contest.solutionLink}
        className="block mt-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        ▶ Watch Solution
      </a>
    )}
  </div>
);

export default ContestCard