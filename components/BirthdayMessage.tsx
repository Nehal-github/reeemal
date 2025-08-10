'use client';
import { useState, useEffect } from 'react';

interface Props {
  messages: string[];
}

export default function BirthdayMessage({ messages }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="text-center text-pink-600 text-2xl font-semibold p-4">
      {messages[index]}
    </div>
  );
}
