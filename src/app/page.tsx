
'use client'
// app/page.tsx
import { useState, useEffect } from 'react';
import { Dancing_Script } from 'next/font/google';
import Header from '../../components/Header';
import Countdown from '../../components/Countdown';
import MusicToggle from '../../components/MusicToggle';
import messages from '@/data/message';
import ImageDisplay from '../../components/ImageDisplay';
import BirthdayMessage from '../../components/BirthdayMessage';

const romanticFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-romantic',
  display: 'swap',
});

export default function HomePage() {
  const [showMain, setShowMain] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!showMain) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 transition-all duration-1000 ease-in-out">
        <Countdown onComplete={() => setShowMain(true)} />
      </div>
    );
  }

  return (
    <main
      className={`${romanticFont.variable} font-romantic min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-yellow-100 flex flex-col items-center justify-center space-y-8 px-4 py-10 transition-all duration-1000 ease-in-out`}
    >
      <Header />

      <div className="animate-fade-in-up delay-1000 transition-opacity duration-2000 ease-in-out text-2xl">
        <BirthdayMessage messages={messages} />
      </div>

      <div className="animate-fade-in-up delay-1000 transition-transform duration-2000 ease-in-out">
        <ImageDisplay index={index} />
      </div>


      <div className="animate-fade-in-up delay-1000 transition-transform duration-2000 ease-in-out">
        <MusicToggle />

      </div>
      <div>
       <div className="animate-fade-in-up delay-1500 transition-transform duration-2000 ease-in-out">
  <video
    src="/romantic.mp4"
    controls
    autoPlay
    loop
    className="rounded-lg shadow-lg max-w-full h-auto"
  />
</div>

      </div>
    </main>
  );
}
