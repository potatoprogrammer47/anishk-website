import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['C#', 'C++', 'Java', 'Python', 'JavaScript', 'HTML/CSS', 'Lua']
  },
  {
    category: 'Game / XR Tools',
    skills: ['Unity', 'Unreal Engine', 'Meta Quest', 'Valve Hammer Editor']
  },
  {
    category: '3D / Design',
    skills: ['Blender', 'Fusion 360', 'Figma']
  },
  {
    category: 'VR / AI Systems',
    skills: ['Convai AI', 'Behavior Logic', 'Prefabs', 'Gaze Tracking']
  },
  {
    category: 'Dev / Workflow',
    skills: ['Git / GitHub', 'Linux', 'Agile']
  }
];

export default function Skills() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars: any = {
    hidden: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-title"
          >
            Technical <span className="premium-gradient-text">Arsenal.</span>
          </motion.h2>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVars}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((group, index) => (
            <motion.div key={index} variants={itemVars} className="skill-group glass-panel">
              <h3 className="skill-category-title">{group.category}</h3>
              <div className="skills-list">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
