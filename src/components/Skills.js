import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLinux, 
  FaShieldAlt, FaNetworkWired, FaDatabase, FaCode, FaTools 
} from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiTailwindcss, SiWireshark } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Force visibility on mobile devices immediately
    if (window.innerWidth <= 768) {
      console.log('Mobile detected - forcing Skills visibility');
      setIsVisible(true);
      setTimeout(() => setAnimateProgress(true), 100);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Skills IntersectionObserver triggered:', {
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          viewport: { width: window.innerWidth, height: window.innerHeight }
        });
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
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

  const programmingSkills = [
    { name: 'Python', level: 85, icon: <FaPython />, color: '#3776ab' },
    { name: 'JavaScript', level: 85, icon: <FaJs />, color: '#f7df1e' },
    { name: 'Java', level: 70, icon: <FaJava />, color: '#ed8b00' },
    { name: 'C++', level: 70, icon: <SiCplusplus />, color: '#00599c' }
  ];

  const cybersecurityTools = [
    { name: 'Nmap', level: 85, icon: <FaNetworkWired />, color: '#4CAF50' },
    { name: 'Burp Suite', level: 80, icon: <FaShieldAlt />, color: '#FF5722' },
    { name: 'Metasploit', level: 75, icon: <FaShieldAlt />, color: '#2196F3' },
    { name: 'Wireshark', level: 80, icon: <SiWireshark />, color: '#1976D2' },
    { name: 'SQLMap', level: 70, icon: <FaDatabase />, color: '#4479a1' }
  ];

  const frontendSkills = [
    { name: 'React', level: 85, icon: <FaReact />, color: '#61dafb' },
    { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss />, color: '#06b6d4' },
    { name: 'HTML/CSS', level: 90, icon: <FaCode />, color: '#e34c26' }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80, icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express.js', level: 75, icon: <FaTools />, color: '#333' },
    { name: 'MongoDB', level: 75, icon: <SiMongodb />, color: '#47a248' },
    { name: 'MySQL', level: 70, icon: <SiMysql />, color: '#4479a1' },
    { name: 'SQLite', level: 70, icon: <FaDatabase />, color: '#044a64' }
  ];

  const otherTools = [
    { name: 'Git', level: 85, icon: <FaGitAlt />, color: '#f05032' },
    { name: 'Linux', level: 80, icon: <FaLinux />, color: '#fcc624' }
  ];

  const coreKnowledge = [
    'Penetration Testing',
    'Vulnerability Assessment',
    'Network Security',
    'Web Application Security',
    'Ethical Hacking',
    'Security Auditing',
    'Incident Response',
    'Risk Assessment'
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: programmingSkills,
      color: '#007bff'
    },
    {
      title: 'Cybersecurity Tools',
      icon: <FaShieldAlt />,
      skills: cybersecurityTools,
      color: '#dc3545'
    },
    {
      title: 'Frontend Frameworks',
      icon: <FaReact />,
      skills: frontendSkills,
      color: '#28a745'
    },
    {
      title: 'Database & Backend',
      icon: <FaDatabase />,
      skills: backendSkills,
      color: '#17a2b8'
    },
    {
      title: 'Other Tools',
      icon: <FaTools />,
      skills: otherTools,
      color: '#6f42c1'
    }
  ];

  // Debug logging for mobile
  useEffect(() => {
    console.log('Skills component data loaded:', {
      skillCategories: skillCategories.length,
      programmingSkills: programmingSkills.length,
      cybersecurityTools: cybersecurityTools.length,
      coreKnowledge: coreKnowledge.length,
      isVisible,
      animateProgress
    });
  }, [isVisible, animateProgress, skillCategories.length, programmingSkills.length, cybersecurityTools.length, coreKnowledge.length]);

  return (
    <section id="skills" className="skills-section section" ref={sectionRef}>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
              Technical Skills
            </h2>
          </Col>
        </Row>

        <Row>
          {skillCategories.map((category, categoryIndex) => (
            <Col lg={6} key={categoryIndex} className="mb-4">
              <Card 
                className={`skill-category-card custom-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <Card.Header className="skill-category-header">
                  <div className="category-icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h4 className="category-title">{category.title}</h4>
                </Card.Header>
                <Card.Body>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item mb-3">
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                          </span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <ProgressBar 
                          now={animateProgress ? skill.level : 0}
                          className="custom-progress"
                          style={{
                            '--progress-color': skill.color,
                            transition: 'all 1s ease-in-out',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <Card className={`core-knowledge-card custom-card ${isVisible ? 'fade-in-up' : ''}`}>
              <Card.Header className="text-center">
                <h4 className="mb-0">
                  <FaShieldAlt className="me-2" style={{ color: '#dc3545' }} />
                  Core Cybersecurity Knowledge
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="knowledge-grid">
                  {coreKnowledge.map((knowledge, index) => (
                    <div 
                      key={index} 
                      className={`knowledge-item ${isVisible ? 'animate-knowledge' : ''}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="knowledge-bullet"></div>
                      <span>{knowledge}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;