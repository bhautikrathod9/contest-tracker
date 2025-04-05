import React from "react";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ContestCard from "./components/ContestCard";
import AddSolutionCard from "./components/AddSolutionCard";
import Footer from './components/Footer'

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
