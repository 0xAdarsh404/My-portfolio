import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/adarsh-pratap-singh-274a73296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      name: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/0xAdarsh404',
      name: 'GitHub',
      color: '#333'
    },
    {
      icon: FaEnvelope,
      url: 'mailto:adarshpratapsingh.dev@gmail.com',
      name: 'Email',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer-section">
      <Container>
        <Row className="g-4">
          {/* Brand Section */}
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <h4 className="brand-name">
                Adarsh Pratap Singh
              </h4>
              <p className="brand-tagline">
                Cybersecurity Enthusiast & Developer
              </p>
              <p className="brand-description">
                Passionate about cybersecurity, penetration testing, and building secure applications. 
                Always learning and exploring new technologies.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      title={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <div className="footer-links">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Skills */}
          <Col lg={3} md={6}>
            <div className="footer-skills">
              <h5 className="footer-title">Core Skills</h5>
              <div className="skills-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Cybersecurity</span>
                <span className="skill-tag">Penetration Testing</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <div className="footer-contact">
              <h5 className="footer-title">Get In Touch</h5>
              <div className="contact-info">
                <p className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:adarshpratapsingh.dev@gmail.com" className="contact-link contact-email">
                    adarshpratapsingh.dev@gmail.com
                  </a>
                </p>
                <p className="contact-item">
                  <span className="contact-text">Prayagraj, India</span>
                </p>
              </div>
              <div className="availability-status">
                <div className="status-indicator"></div>
                <span className="status-text">Available for opportunities</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom">
          <Col md={6}>
            <div className="copyright">
              <p className="copyright-text">
                © {currentYear} Adarsh Pratap Singh. Made with{' '}
                <FaHeart className="heart-icon" /> using React & Bootstrap
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="footer-actions">
              <button 
                className="scroll-top-btn"
                onClick={scrollToTop}
                title="Back to top"
              >
                <FaArrowUp />
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Animated Background */}
      <div className="footer-bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;