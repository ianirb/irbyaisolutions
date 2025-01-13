import React from 'react';
import { Cpu } from 'lucide-react';

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <button 
      onClick={onClick}
      className="group flex items-center gap-2 focus:outline-none"
    >
      <div className="relative">
        <Cpu className="w-8 h-8 text-blue-500 transform group-hover:rotate-180 transition-transform duration-500" />
        <div className="absolute inset-0 bg-blue-500/20 animate-pulse rounded-lg"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">
          Irby AI
        </span>
        <span className="text-xs text-gray-400 tracking-wider font-mono">
          SOLUTIONS
        </span>
      </div>
    </button>
  );
}