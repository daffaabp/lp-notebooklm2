import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  // 2 hours in seconds = 7200
  const [timeLeft, setTimeLeft] = useState(7200);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-red-50 border border-red-100 rounded-lg p-3 mb-6 text-center animate-pulse">
      <div className="flex items-center justify-center gap-2 text-danger font-bold text-lg">
        <Timer className="w-5 h-5" />
        <span>Penawaran Berakhir Dalam:</span>
      </div>
      <div className="text-3xl font-black text-danger mt-1 tracking-wider font-mono">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};