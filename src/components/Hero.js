import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = [
      'Cybersecurity Analyst',
      'SOC Engineer',
      'Full-Stack Developer',
      'Penetration Tester',
      'MCA Student'
    ];
    
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} md={10} className="mx-auto text-center">
            <div className="hero-content fade-in-up">
              <div className="greeting-text mb-3">
                <span className="wave">👋</span> Hi I am
              </div>
              
              <h1 className="hero-name mb-3">
                <span className="highlight">Adarsh Pratap Singh</span>
              </h1>
              
              <div className="hero-title mb-4">
                <span className="typing-text">{displayText}</span>
                <span className="cursor">|</span>
              </div>
              
              <p className="hero-description mb-4">
                Cybersecurity-focused professional with hands-on experience in vulnerability assessment, network security, and SOC operations using Nmap, Burp Suite, Wireshark, Metasploit, and SIEM tools. Built a rule-based SOC log monitoring dashboard for real-time threat detection and event visualization. Pursuing MCA in Cyber Security while applying secure development principles from a full-stack (MERN) background.
              </p>
              
              <div className="contact-info mb-4">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+91-7307728452</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>adarshsingh53152@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Noida, Uttar Pradesh</span>
                </div>
              </div>
              
              <div className="hero-buttons mb-4">
                <Button 
                  className="btn-custom btn-primary me-3 mb-2"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
                <Button 
                  className="btn-custom btn-outline-primary mb-2"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
              </div>
              
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/adarsh-pratap-singh-274a73296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/0xAdarsh404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="mailto:adarshsingh53152@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;