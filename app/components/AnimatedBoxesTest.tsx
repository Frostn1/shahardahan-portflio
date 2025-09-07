"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BoxData {
  id: number;
  color: string;
  title: string;
  content: string;
}

const testBoxes: BoxData[] = [
  {
    id: 1,
    color: "from-indigo-600 via-purple-600 to-pink-600",
    title: "First Box",
    content: "This is a beautiful animated box with smooth transitions and glass morphism effects.",
  },
  {
    id: 2,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    title: "Second Box",
    content: "Scroll with your mouse wheel or use the navigation controls to move between boxes.",
  },
  {
    id: 3,
    color: "from-amber-500 via-orange-500 to-red-500",
    title: "Third Box",
    content: "Each box automatically advances after 20 seconds, or hover to pause the timer.",
  },
];

export default function AnimatedBoxesTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoAdvanceTime = 20; // 20 seconds

  const nextBox = () => {
    setCurrentIndex((prev) => (prev + 1) % testBoxes.length);
    setProgress(0);
  };

  const prevBox = () => {
    setCurrentIndex((prev) => (prev - 1 + testBoxes.length) % testBoxes.length);
    setProgress(0);
  };

  const goToBox = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setProgress(0);

    // Progress bar animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 100 / (autoAdvanceTime * 10); // Update every 100ms
      });
    }, 100);

    // Auto advance timer
    intervalRef.current = setTimeout(() => {
      nextBox();
    }, autoAdvanceTime * 1000);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  const resumeTimer = () => {
    setIsPaused(false);
    const remainingTime = autoAdvanceTime * 1000 * (1 - progress / 100);

    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    // Resume progress bar
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 100 / (autoAdvanceTime * 10);
      });
    }, 100);

    // Resume auto advance with remaining time
    intervalRef.current = setTimeout(() => {
      nextBox();
    }, remainingTime);
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isPaused]);

  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextBox();
    } else {
      prevBox();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Animated Boxes Component
          </h1>
          <p className="text-gray-600">
            Scroll, click, or wait for auto-advance
          </p>
        </div>

        {/* Main Box Container */}
        <div
          className="relative h-80 overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
          onWheel={handleScroll}
          onMouseEnter={pauseTimer}
          onMouseLeave={resumeTimer}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                scale: { type: "spring", stiffness: 300, damping: 30 },
              }}
              className={`absolute inset-0 bg-gradient-to-br ${testBoxes[currentIndex].color}`}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl font-bold text-white mb-6 drop-shadow-lg"
                >
                  {testBoxes[currentIndex].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg text-white/90 leading-relaxed drop-shadow-md max-w-md"
                >
                  {testBoxes[currentIndex].content}
                </motion.p>
              </div>

              {/* Box indicator */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                {currentIndex + 1} / {testBoxes.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Auto advance in{" "}
              {Math.ceil(autoAdvanceTime - (progress / 100) * autoAdvanceTime)}s
            </span>
            <div className="flex gap-2">
              {isPaused ? (
                <button
                  onClick={resumeTimer}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  ▶ Resume
                </button>
              ) : (
                <button
                  onClick={pauseTimer}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  ⏸ Pause
                </button>
              )}
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full shadow-sm"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testBoxes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToBox(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${
                index === currentIndex
                  ? "bg-blue-500 scale-125 shadow-blue-200"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevBox}
          className="absolute top-1/2 -translate-y-1/2 -left-6 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 z-20"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextBox}
          className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 z-20"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Instructions */}
        <div className="text-center mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Instructions:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span>🖱️ Scroll to navigate</span>
            <span>👆 Click arrows or dots</span>
            <span>⏸️ Hover to pause</span>
            <span>⏰ Auto-advance every 20s</span>
          </div>
        </div>
      </div>
    </div>
  );
}
