import { motion } from 'framer-motion';
import { ExternalLink, Database, Code2, ShieldAlert } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Lockheed Martin Unity Simulation',
    category: 'Sponsor Project',
    description: 'Efficiency simulation clone with real-time information fed directly into the game environment.',
    tools: ['Unity', 'C#', 'Data Integration'],
    icon: <ShieldAlert />,
    image: '/images/lockheed-martin.png'
  },
  {
    title: 'VisionBridge',
    category: 'Healthcare VR',
    description: 'Unity-based neuroplasticity simulator helping newly sighted individuals relearn visual perception via multisensory training, Convai AI, and gaze-tracking.',
    tools: ['VR', 'Unity', 'Convai AI', 'Gaze Tracking'],
    icon: <Database />,
    image: '/images/vision-bridge.png'
  },
  {
    title: 'VR Spaceship Game',
    category: 'Educational VR',
    description: 'Immersive sci-fi game in Unity with interactive mechanics and immersive gameplay elements.',
    tools: ['Unity', 'C#', 'VR Mechanics'],
    icon: <Code2 />,
    image: '/images/spaceship.gif'
  },
  {
    title: 'Counter-Strike 2 Map',
    category: 'Level Design',
    description: 'Recreation of Gannon University built in Valve Hammer Editor, tied to Gannon Gaming Club tournament use.',
    tools: ['Source 2', 'Hammer Editor', 'Level Design'],
    icon: <ExternalLink />,
    image: '/images/cs2-map.png'
  }
];

export default function Projects() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-title"
          >
            Featured <span className="premium-gradient-text">Systems.</span>
          </motion.h2>
          <p className="section-subtitle">A curated gallery of immersive tech work.</p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVars}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVars} className="project-card glass-panel" whileHover={{ y: -10, rotateX: 2, rotateY: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-scanline"></div>
              </div>
              
              <div className="project-content">
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-overlay">
                <button className="project-btn">Explore Case Study</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
