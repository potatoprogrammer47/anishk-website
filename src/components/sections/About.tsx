import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';
import './About.css';

export default function About() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div 
          className="about-grid"
          variants={containerVars}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Text */}
          <div className="about-content">
            <motion.h2 variants={itemVars} className="section-title">
              <span className="premium-gradient-text">Engineering</span> the Immersive.
            </motion.h2>
            
            <motion.div variants={itemVars} className="about-text-blocks">
              <p>
                As a VR Developer and Game Designer based in Erie, PA, I blend technical implementation with worldbuilding. 
                My focus lies at the intersection of gameplay systems, human-computer interaction, and immersive tech.
              </p>
              <p>
                Currently a student at Gannon University, I am building virtual experiences that range from neuroplasticity 
                simulators for newly sighted individuals, to competitive gaming arenas, and educational sci-fi worlds.
              </p>
              <p>
                I approach development with the mindset that a portfolio shouldn't just be a webpage—it should be 
                engineered like a world, playable, intentional, and alive.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visual Features */}
          <div className="about-visuals">
            <motion.div variants={itemVars} className="feature-card glass-panel">
              <Terminal className="feature-icon" />
              <h3>Game & XR Tools</h3>
              <p>Deep expertise in Unity, Unreal, and Blender to architect worlds.</p>
            </motion.div>
            
            <motion.div variants={itemVars} className="feature-card glass-panel">
              <Code className="feature-icon" />
              <h3>Systems Development</h3>
              <p>Fluent in C#, C++, Java, and Python for robust logic and AI integrations.</p>
            </motion.div>
            
            <motion.div variants={itemVars} className="feature-card glass-panel">
              <Cpu className="feature-icon" />
              <h3>Immersive UI & UX</h3>
              <p>Designing interfaces that feel tactile, spatial, and premium.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
