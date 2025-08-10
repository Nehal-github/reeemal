'use client';
import { useState, useRef } from 'react';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false); // Start as false

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <audio ref={audioRef} loop>
        <source src="./hbd.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleMusic}
        className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition"
      >
        {playing ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
}
