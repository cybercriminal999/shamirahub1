import React from 'react';
import { ArrowLeftIcon, SparklesIcon } from './Icons';

interface BackPageProps {
  onFlip: () => void;
}

const BackPage: React.FC<BackPageProps> = ({ onFlip }) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-700 rounded-2xl shadow-2xl p-8 flex flex-col justify-between items-center text-center">
      <div className="flex items-center gap-4 text-teal-100">
        <SparklesIcon className="w-10 h-10" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Back Side
        </h1>
      </div>
      
      <div className="space-y-4">
        <p className="text-lg text-teal-200 max-w-md">
          Welcome to the other side! This demonstrates a simple yet elegant transition effect using pure CSS and React state management.
        </p>
      </div>

      <button
        onClick={onFlip}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-teal-800 rounded-xl hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-400"
      >
        <ArrowLeftIcon className="w-6 h-6 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        Flip to Front
      </button>
    </div>
  );
};

export default BackPage;
