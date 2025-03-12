"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Problem {
  title: string;
  link: string;
}

interface SidebarProps {
  problems: Problem[];
}

export default function Sidebar({ problems }: SidebarProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX < 100) {
        setShowSidebar(true);
      } else if (e.clientX > 300) {
        setShowSidebar(false);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 p-6 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2">
        {problems.map((problem, index) => (
          <li key={index}>
            <Link href={problem.link} className="hover:text-teal-300 transition">
              {problem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
