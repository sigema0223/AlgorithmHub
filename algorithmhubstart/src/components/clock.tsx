"use client";

import { useState, useEffect } from "react";

const getTimeAngles = (timezone: string) => {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return {
    hourAngle: (hours + minutes / 60) * 30,
    minuteAngle: (minutes + seconds / 60) * 6,
    secondAngle: seconds * 6,
  };
};

interface ClockProps {
  timezone: string;
  city: string;
  className?: string;
}

export default function Clock({ timezone, city, className }: ClockProps) {
  const [clock, setClock] = useState(getTimeAngles(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(getTimeAngles(timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-60 h-60 text-black bg-white rounded-full flex items-center justify-center">
        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30;
          return (
            <span
              key={i}
              className="absolute text-black font-bold"
              style={{ transform: `rotate(${angle}deg) translateY(-90px) rotate(-${angle}deg)` }}
            >
              {i + 1}
            </span>
          );
        })}
        {/* Clock Hands */}
        <div className="absolute w-[4px] h-16 bg-black origin-center" style={{ transform: `rotate(${clock.hourAngle}deg) translateY(-16px)` }}></div>
        <div className="absolute w-[3px] h-24 bg-gray-800 origin-center" style={{ transform: `rotate(${clock.minuteAngle}deg) translateY(-24px)` }}></div>
        <div className="absolute w-[2px] h-28 bg-red-500 origin-center" style={{ transform: `rotate(${clock.secondAngle}deg) translateY(-28px)` }}></div>
      </div>
      <p className="mt-4 text-lg text-white font-medium">{city}</p>
    </div>
  );
}