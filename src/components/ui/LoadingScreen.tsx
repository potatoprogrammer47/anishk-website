import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading assets/environment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Wait briefly after 100% before firing complete
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1; // Random leap
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="loading-content">
          <motion.div 
            className="loading-logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SYS_INIT: <span className="premium-gradient-text">AK.WORLD</span>
          </motion.div>
          
          <div className="progress-bar-container">
            <motion.div 
              className="progress-bar-fill"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>
          
          <div className="loading-stats">
            <span>LOADING ENVIRONMENT...</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>

          <div className="loading-terminal">
            {progress > 10 && <p>&gt; Initializing WebGL Renderer...</p>}
            {progress > 40 && <p>&gt; Loading Textures...</p>}
            {progress > 70 && <p>&gt; Establishing Physics Constraints...</p>}
            {progress >= 100 && <p className="terminal-success">&gt; LAUNCH READY.</p>}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
