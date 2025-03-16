"use client";

import Link from "next/link";
import Clock from "@/components/clock";
import "@/styles/global.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-700 p-10 font-montserrat text-white">
      {/* Top Navigation Bar (No Animation) */}
      <div className="w-full bg-gray-700 text-white py-4 px-10 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="text-2xl font-bold">Algorithm Hub</div>
        <nav className="flex gap-8">
          <Link href="#" className="hover:text-teal-300 transition">Home</Link>
          <Link href="#" className="hover:text-teal-300 transition">About</Link>
          <Link href="#" className="hover:text-teal-300 transition">Services</Link>
          <Link href="#" className="hover:text-teal-300 transition">Contact</Link>
        </nav>
      </div>
      
      {/* Header Section with Animation */}
      <motion.header 
        className="text-center mb-16 mt-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg cursor-pointer">
          Algorithm Hub
        </h1>
        <p className="text-white mt-2">Hyunwoo Lee</p>
      </motion.header>
      
      {/* Main Layout with Animation */}
      <motion.div 
        className="flex flex-row items-start gap-10 w-full max-w-6xl px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Time Circles */}
        <motion.div 
          className="flex flex-col items-center gap-8 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Clock timezone="Asia/Seoul" city="Seoul" className="text-white"/>
          <Clock timezone="Europe/London" city="London" className="text-white"/>
        </motion.div>
        
        {/* Description Box */}
        <motion.div
          className="w-full max-w-3xl p-8 text-white text-lg flex items-center ml-50 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="leading-relaxed text-justify space-y-6">
            This website is designed to help job seekers who are working hard to prepare for coding tests.
            <br /><br />
            Here, you can explore essential algorithms and key concepts with corresponding questions.
            <br /><br />
            I developed this website as part of my portfolio and job application process, and I hope it helps you, too.
            <br /><br />
            Just in case, my favorite algorithm is the brute-force algorithm.
            <br /><br />
            Wishing you success in securing your dream job!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}