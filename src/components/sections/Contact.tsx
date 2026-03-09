import { motion } from "framer-motion";
import { Linkedin, Mail, Github, Download } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact-form" className="contact-section section">
      <div className="container">
        <motion.div
          className="contact-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-content">
            <h2 className="contact-title">
              Let's build the{" "}
              <span className="premium-gradient-text">future.</span>
            </h2>
            <p className="contact-subtitle">
              Whether you're looking for a VR developer, game designer, or
              someone to blend technical systems with immersive interactions—I'm
              ready.
            </p>

            <div className="contact-actions">
              <a
                href="https://www.linkedin.com/in/anishk-katta-34b213237/"
                target="_blank"
                rel="noreferrer"
                className="contact-btn linkedin-btn"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href="mailto:katta006@gannon.edu"
                className="contact-btn email-btn"
              >
                <Mail size={20} />
                <span>katta006@gannon.edu</span>
              </a>

              <a
                href="https://github.com/potatoprogrammer47"
                target="_blank"
                rel="noreferrer"
                className="contact-btn github-btn"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="resume-download-wrapper">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-btn glass-panel"
              >
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
