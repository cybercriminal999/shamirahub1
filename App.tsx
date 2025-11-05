import React, { useState, useCallback } from 'react';
import FrontPage from './components/FrontPage';
import BackPage from './components/BackPage';

const App: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const version = 'v1.0.0';
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleFlip = useCallback(() => {
    setIsFlipped(prevState => !prevState);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <div className="absolute top-4 left-4 text-gray-400 text-sm font-mono z-10">
        <div>{version}</div>
        <div>{currentDate}</div>
      </div>
      <div className="w-full max-w-2xl h-[60vh] min-h-[400px] [perspective:1200px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <FrontPage onFlip={handleFlip} />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <BackPage onFlip={handleFlip} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
