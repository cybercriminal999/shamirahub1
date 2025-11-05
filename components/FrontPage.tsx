import React from 'react';
import { ArrowRightIcon, CodeBracketIcon } from './Icons';

interface FrontPageProps {
  onFlip: () => void;
  text: string;
  onTextChange: (newText: string) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ onFlip, text, onTextChange }) => {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-indigo-700 rounded-2xl shadow-2xl p-8 flex flex-col justify-between items-center text-center">
      <div className="flex items-center gap-4 text-indigo-100">
        <CodeBracketIcon className="w-10 h-10" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Front Side
        </h1>
      </div>

      <div className="w-full flex-grow my-6 flex">
         <textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Type something on the front..."
          className="w-full h-full bg-indigo-900/50 rounded-xl p-4 text-lg text-indigo-100 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          aria-label="Front side text input"
        />
      </div>
      
      <button
        onClick={onFlip}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-indigo-800 rounded-xl hover:bg-indigo-900 focus:outline-none focus:ring-4 focus:ring-indigo-400"
      >
        Flip to Back
        <ArrowRightIcon className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default FrontPage;
