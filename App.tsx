import React, { useState, useCallback } from 'react';
import FrontPage from './components/FrontPage';
import BackPage from './components/BackPage';

const App: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped(prevState => !prevState);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
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
