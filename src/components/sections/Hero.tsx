import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVars}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVars} className="hero-label">
            <span className="premium-gradient-text">XR & Game Developer</span>
          </motion.div>
          
          <motion.h1 variants={itemVars} className="hero-title">
            Anishk Katta
          </motion.h1>
          
          <motion.h2 variants={itemVars} className="hero-subtitle">
            Building virtual experiences that feel playable, intentional, and alive.
          </motion.h2>

          <motion.div variants={itemVars} className="hero-cta-wrapper">
            <a href="#about" className="hero-cta glass-panel">
              Enter World <ChevronDown size={20} className="cta-icon" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <motion.div 
          className="scroll-line"
          animate={{ height: ['0px', '40px', '0px'], top: ['0%', '50%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
