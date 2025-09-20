import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import LoadingScreen from './components/loading-screen/index.tsx';
import CONFIG from '../gitprofile.config.js';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <React.StrictMode>
          <GitProfile config={CONFIG} />
        </React.StrictMode>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
