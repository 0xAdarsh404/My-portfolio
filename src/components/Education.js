import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBook, FaShieldAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Force visibility on mobile devices immediately
    if (window.innerWidth <= 768) {
      console.log('Mobile detected - forcing Education visibility');
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
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

  const education = [
    {
      degree: "Master of Computer Applications (MCA) - Cyber Security",
      institution: "Amity University (Online)",
      location: "Noida",
      duration: "2026 – Present",
      status: "In Progress",
      relevantCoursework: [
        "Advanced Cyber Security",
        "Network Security",
        "Ethical Hacking",
        "Incident Response",
        "Digital Forensics",
        "Secure Coding Practices"
      ],
      achievements: []
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Allahabad State University",
      location: "Prayagraj",
      duration: "2023 – 2026",
      status: "Completed",
      relevantCoursework: [
        "Computer Networks",
        "Cybersecurity Fundamentals",
        "Database Management Systems",
        "Operating Systems",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Web Technologies",
        "Programming Languages"
      ],
      achievements: [
        "Strong academic performance in cybersecurity courses",
        "Active participation in programming projects",
        "Focus on practical application of theoretical concepts",
        "Consistent performance in technical subjects"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Certified Security Course (CSC)",
      subtitle: "Cyber Security & Ethical Hacking Training",
      organization: "DROP Organization",
      date: "Nov 2024",
      status: "Completed",
      description: "Completed comprehensive training and examination on web application penetration testing and cybersecurity fundamentals.",
      skills: [
        "Web Application Penetration Testing",
        "Ethical Hacking Fundamentals",
        "Vulnerability Assessment",
        "Security Testing Methodologies",
        "Risk Assessment"
      ],
      credentialId: "DCSC-2024-001",
      icon: <FaShieldAlt />
    }
  ];

  const languages = [
    {
      language: "Hindi",
      proficiency: "Native",
      level: 100
    },
    {
      language: "English",
      proficiency: "Fluent",
      level: 90
    }
  ];

  return (
    <section id="education" className="education-section section" ref={sectionRef}>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
              Education & Certifications
            </h2>
          </Col>
        </Row>

        {/* Education */}
        <Row className="mb-5">
          <Col lg={12}>
            {education.map((edu, index) => (
              <Card key={index} className={`education-card custom-card mb-4 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <Card.Header className="education-header">
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-info">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <h5 className="institution-name">{edu.institution}</h5>
                    <div className="education-meta">
                      <span className="education-location">
                        <FaMapMarkerAlt className="me-2" />
                        {edu.location}
                      </span>
                      <span className="education-duration">
                        <FaCalendarAlt className="me-2" />
                        {edu.duration}
                      </span>
                      <Badge 
                        bg={edu.status === 'Completed' ? 'success' : 'primary'}
                        className="education-status"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </Card.Header>
                
                {edu.relevantCoursework.length > 0 && (
                  <Card.Body>
                    <Row>
                      <Col lg={edu.achievements.length > 0 ? 6 : 12} className="mb-4">
                        <h6 className="subsection-title">
                          <FaBook className="me-2" />
                          Relevant Coursework
                        </h6>
                        <div className="coursework-grid">
                          {edu.relevantCoursework.map((course, idx) => (
                            <div 
                              key={idx} 
                              className={`coursework-item ${isVisible ? 'animate-item' : ''}`}
                              style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}
                            >
                              {course}
                            </div>
                          ))}
                        </div>
                      </Col>
                      
                      {edu.achievements.length > 0 && (
                        <Col lg={6}>
                          <h6 className="subsection-title">
                            <FaAward className="me-2" />
                            Academic Achievements
                          </h6>
                          <ul className="achievements-list">
                            {edu.achievements.map((achievement, idx) => (
                              <li 
                                key={idx}
                                className={`achievement-item ${isVisible ? 'animate-item' : ''}`}
                                style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}
                              >
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </Col>
                      )}
                    </Row>
                  </Card.Body>
                )}
              </Card>
            ))}
          </Col>
        </Row>

        {/* Certifications */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className={`subsection-heading ${isVisible ? 'fade-in-up' : ''}`}>
              Professional Certifications
            </h3>
          </Col>
        </Row>
        
        <Row>
          {certifications.map((cert, index) => (
            <Col lg={12} key={cert.id} className="mb-4">
              <Card 
                className={`certification-card custom-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card.Header className="certification-header">
                  <div className="cert-icon">
                    <FaCertificate />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <h6 className="cert-subtitle">{cert.subtitle}</h6>
                    <div className="cert-meta">
                      <span className="cert-organization">{cert.organization}</span>
                      <span className="cert-date">
                        <FaCalendarAlt className="me-2" />
                        {cert.date}
                      </span>
                      <Badge bg="success" className="cert-status">
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </Card.Header>
                
                <Card.Body>
                  <p className="cert-description">{cert.description}</p>
                  
                  <div className="cert-skills">
                    <h6 className="skills-title">Skills Acquired:</h6>
                    <div className="skills-tags">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          bg="outline-primary"
                          className="skill-badge"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {cert.credentialId && (
                    <div className="credential-id">
                      <small className="text-muted">
                        Credential ID: {cert.credentialId}
                      </small>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Languages */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className={`languages-card custom-card ${isVisible ? 'fade-in-up' : ''}`}>
              <Card.Header className="text-center">
                <h4 className="mb-0">
                  <FaBook className="me-2" />
                  Languages
                </h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  {languages.map((lang, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <div className="language-item">
                        <div className="language-header">
                          <span className="language-name">{lang.language}</span>
                          <span className="language-proficiency">{lang.proficiency}</span>
                        </div>
                        <div className="language-progress">
                          <div 
                            className="language-bar"
                            style={{ 
                              width: isVisible ? `${lang.level}%` : '0%',
                              transition: 'width 1s ease-in-out',
                              transitionDelay: `${index * 0.2}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;