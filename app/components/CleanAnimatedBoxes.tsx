"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BoxData {
  id: number;
  color: string;
  title: string;
  content: string;
}

interface CleanAnimatedBoxesProps {
  autoAdvanceTime?: number;
  boxes?: BoxData[];
  className?: string;
}

const defaultBoxes: BoxData[] = [
  {
    id: 1,
    color: "from-blue-500 to-purple-600",
    title: "First Box",
    content: "Beautiful animated content with smooth transitions.",
  },
  {
    id: 2,
    color: "from-green-500 to-teal-600",
    title: "Second Box",
    content: "Scroll through boxes or wait for auto-advance.",
  },
  {
    id: 3,
    color: "from-orange-500 to-red-600",
    title: "Third Box",
    content: "Clean design with glass morphism effects.",
  },
];

export default function CleanAnimatedBoxes({
  autoAdvanceTime = 20,
  boxes = defaultBoxes,
  className = "",
}: CleanAnimatedBoxesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextBox = () => {
    setCurrentIndex((prev) => (prev + 1) % boxes.length);
    setProgress(0);
  };

  const prevBox = () => {
    setCurrentIndex((prev) => (prev - 1 + boxes.length) % boxes.length);
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

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (autoAdvanceTime * 10);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

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

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (autoAdvanceTime * 10);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

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
  }, [currentIndex, isPaused, autoAdvanceTime]);

  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextBox();
    } else {
      prevBox();
    }
  };

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${boxes[currentIndex].color}`}
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-3xl font-bold text-white mb-4 drop-shadow-lg"
              >
                {boxes[currentIndex].title}
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-lg text-white/90 leading-relaxed drop-shadow-md max-w-md"
              >
                {boxes[currentIndex].content}
              </motion.p>
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              {currentIndex + 1} / {boxes.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Next in {Math.ceil(autoAdvanceTime - (progress / 100) * autoAdvanceTime)}s
          </span>
          <button
            onClick={isPaused ? resumeTimer : pauseTimer}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {isPaused ? "▶ Resume" : "⏸ Pause"}
          </button>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={prevBox}
          className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {boxes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBox(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}

        <button
          onClick={nextBox}
          className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Instructions */}
      <div className="text-center mt-3 text-xs text-gray-500">
        Scroll • Click arrows or dots • Hover to pause
      </div>
    </div>
  );
}
