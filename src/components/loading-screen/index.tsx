import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(onComplete, 800); // Wait for animation to complete
    }, 1000); // Show loading screen for 1 second

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isAnimating ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h1 className="loading-text">GitProfile</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
