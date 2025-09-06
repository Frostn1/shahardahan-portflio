'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BoxData {
  id: number;
  color: string;
  title: string;
  content: string;
}

interface AnimatedBoxesProps {
  autoAdvanceTime?: number; // in seconds, default 20
  boxes?: BoxData[];
}

const defaultBoxes: BoxData[] = [
  {
    id: 1,
    color: 'from-blue-500 to-purple-600',
    title: 'First Box',
    content: 'This is the content of the first box with a beautiful blue to purple gradient.'
  },
  {
    id: 2,
    color: 'from-green-500 to-teal-600',
    title: 'Second Box',
    content: 'This is the content of the second box with a refreshing green to teal gradient.'
  },
  {
    id: 3,
    color: 'from-orange-500 to-red-600',
    title: 'Third Box',
    content: 'This is the content of the third box with a vibrant orange to red gradient.'
  }
];

export default function AnimatedBoxes({
  autoAdvanceTime = 20,
  boxes = defaultBoxes
}: AnimatedBoxesProps) {
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

    // Progress bar animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / (autoAdvanceTime * 10)); // Update every 100ms
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
        return prev + (100 / (autoAdvanceTime * 10));
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
  }, [currentIndex, autoAdvanceTime, isPaused]);

  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextBox();
    } else {
      prevBox();
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
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
              scale: { type: "spring", stiffness: 300, damping: 30 }
            }}
            className={`absolute inset-0 bg-gradient-to-br ${boxes[currentIndex].color} backdrop-blur-sm`}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20" />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl font-bold text-white mb-6 drop-shadow-lg"
              >
                {boxes[currentIndex].title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-white/90 leading-relaxed drop-shadow-md max-w-md"
              >
                {boxes[currentIndex].content}
              </motion.p>
            </div>

            {/* Box indicator */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
              {currentIndex + 1} / {boxes.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Auto advance in {Math.ceil(autoAdvanceTime - (progress / 100) * autoAdvanceTime)}s
          </span>
          <div className="flex gap-2">
            {isPaused ? (
              <button
                onClick={resumeTimer}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Resume
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Pause
              </button>
            )}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {boxes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBox(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
        <button
          onClick={prevBox}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
        <button
          onClick={nextBox}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Instructions */}
      <div className="text-center mt-4 text-sm text-gray-500">
        Scroll with mouse wheel • Click arrows or dots • Hover to pause
      </div>
    </div>
  );
}
