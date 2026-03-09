import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Research Assistant',
    company: 'Gannon University',
    type: 'Academic',
    description: 'Assisting in academic research, likely involving immersive technologies and VR applications.',
    icon: <GraduationCap />
  },
  {
    role: 'Student VR Developer',
    company: 'Independent / Sponsored',
    type: 'Development',
    description: 'Building Unity-based simulators, including projects sponsored by Lockheed Martin and healthcare initiatives.',
    icon: <Briefcase />
  },
  {
    role: 'ITS Student Technician',
    company: 'Gannon University',
    type: 'IT Support',
    description: 'Providing technical support, managing systems, and ensuring seamless IT operations for the university.',
    icon: <Briefcase />
  },
  {
    role: 'President',
    company: 'Gannon Lifting Club',
    type: 'Leadership',
    description: 'Leading the university lifting club, organizing events, and fostering a community of fitness enthusiasts.',
    icon: <GraduationCap />
  },
  {
    role: 'Vice President',
    company: 'Gannon Hacks Club',
    type: 'Leadership',
    description: 'Co-leading the university hacking and computer science club, coordinating hackathons and technical workshops.',
    icon: <GraduationCap />
  }
];

export default function Experience() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVars: any = {
    hidden: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <div className="section-header text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-title"
          >
            Journey & <span className="premium-gradient-text">Leadership.</span>
          </motion.h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <motion.div 
            className="timeline-items"
            variants={containerVars}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVars} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <div className="experience-header">
                    <div className="experience-icon">{exp.icon}</div>
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">{exp.company} • <span className="experience-type">{exp.type}</span></p>
                    </div>
                  </div>
                  <p className="experience-desc">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
