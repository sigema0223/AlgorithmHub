"use client";

import Link from "next/link";
import Clock from "@/components/clock";
import "@/styles/global.css";
import Sidebar from "@/components/sidebar";

export default function Home() {
  
  const problems = [
    { title: "Problem 1", link: "/problems/problem1" },
    { title: "Problem 2", link: "/problems/problem2" },
    { title: "Problem 3", link: "/problems/problem3" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-10 font-montserrat">
      {/* Sidebar */}
      <Sidebar problems={problems} />

      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-teal-600">Algorithm Hub</h1>
        <p className="text-black mt-2">Hyunwoo Lee</p>
      </header>
      
      {/* Main Layout */}
      <div className="flex flex-row items-start gap-16 w-full max-w-7xl px-20">
        {/* Time Circles */}
        <div className="flex flex-col items-center gap-10 flex-shrink-0">
          <Clock timezone="Asia/Seoul" city="Seoul" />
          <Clock timezone="Europe/London" city="London" />
        </div>
        
        {/* Content Box */}
        <div className="bg-teal-500 w-full max-w-lg h-[700px] rounded-xl p-8 shadow-lg overflow-auto flex-shrink-0 self-start ml-auto">
          <h2 className="text-xl font-medium text-white mb-4">Contents</h2>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="bg-teal-400 p-4 rounded-lg hover:bg-teal-600 transition">
                <Link href={problem.link} className="text-white font-semibold text-lg">{problem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
