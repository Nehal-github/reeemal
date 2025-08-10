'use client';
import { useState, useEffect } from 'react';

export default function Countdown({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count <= 0) return;

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      // Optional: trigger confetti or sound here 🎉
      onComplete();
    }
  }, [count, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-yellow-100 text-pink-800 text-6xl font-bold transition-all duration-1000 ease-in-out">
      <p className="animate-bounce scale-110">{count}</p>
      <p className="text-xl mt-4 font-medium animate-fade-in-up">
         surprise waiting …
      </p>
    </div>
  );
}
