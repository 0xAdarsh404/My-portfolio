import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaShieldAlt, FaGraduationCap, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const highlights = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Operations",
      description: "SIEM monitoring, log analysis, alert triage, incident response fundamentals"
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "MERN stack (React, Node.js, Express, MongoDB) with secure coding practices"
    },
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description: "MCA in Cyber Security (Ongoing) with completed BCA in Computer Applications"
    },
    {
      icon: <FaLightbulb />,
      title: "Security Tools",
      description: "Nmap, Burp Suite, Wireshark, Metasploit, SQLMap for penetration testing"
    }
  ];

  return (
    <section id="about" className="about-section section" ref={sectionRef}>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
              Professional Summary
            </h2>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={6} className="mb-4">
            <div className={`about-content ${isVisible ? 'fade-in-left' : ''}`}>
              <div className="summary-text">
                <p className="lead mb-4">
                  Cybersecurity-focused professional with hands-on experience in <span className="highlight">vulnerability assessment</span>, <span className="highlight">network security</span>, and <span className="highlight">SOC operations</span>. Built a rule-based SOC log monitoring dashboard for real-time threat detection and event visualization.
                </p>
                
                <p className="mb-4">
                  Pursuing <strong>MCA in Cyber Security</strong> while applying secure development principles from a full-stack (MERN) background. Seeking a SOC Analyst / Cybersecurity Analyst role to apply detection, monitoring, and incident-response skills in a production environment.
                </p>
                
                <div className="stats-container">
                  <div className="stat-item">
                    <div className="stat-number">4+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1</div>
                    <div className="stat-label">Certification</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">0.5+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className={`highlights-grid ${isVisible ? 'fade-in-right' : ''}`}>
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className={`highlight-card custom-card ${isVisible ? 'animate-card' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card.Body className="text-center">
                    <div className="highlight-icon mb-3">
                      {item.icon}
                    </div>
                    <h5 className="highlight-title mb-3">{item.title}</h5>
                    <p className="highlight-description">{item.description}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <div className={`soft-skills ${isVisible ? 'fade-in-up' : ''}`}>
              <h4 className="mb-4 text-center">Core Competencies</h4>
              <div className="skills-tags">
                <span className="skill-tag">Problem-Solving</span>
                <span className="skill-tag">Teamwork & Collaboration</span>
                <span className="skill-tag">Communication Skills</span>
                <span className="skill-tag">Analytical Thinking</span>
                <span className="skill-tag">Network Security</span>
                <span className="skill-tag">Vulnerability Assessment</span>
                <span className="skill-tag">Penetration Testing</span>
                <span className="skill-tag">Python Automation</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;