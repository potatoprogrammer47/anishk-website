import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section" id="contact">
      <div className="container footer-container">
        <div className="footer-content glass-panel">
          <h2 className="footer-title">Let's build something <span className="premium-gradient-text">immersive.</span></h2>
          <p className="footer-subtitle">Open to new opportunities in VR, Games, and Interactive Design.</p>
          
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link primary-btn">LinkedIn</a>
            <a href="mailto:katta006@gannon.edu" className="footer-link secondary-btn">Email</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link secondary-btn">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anishk Katta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
