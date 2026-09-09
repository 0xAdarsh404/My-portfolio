import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode, FaShieldAlt, FaCog, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    // Force visibility on mobile devices immediately
    if (window.innerWidth <= 768) {
      console.log('Mobile detected - forcing Projects visibility');
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

  const projects = [
    {
      id: 1,
      title: "SOC Log Analyzer Dashboard",
      description: "Built a security log monitoring dashboard to detect suspicious activity from system logs in real time. Implemented rule-based alert generation and interactive event visualization to support security analysis workflows.",
      technologies: ["Python", "React.js", "SQLite"],
      category: "security",
      icon: <FaShieldAlt />,
      year: "2025",
      status: "Completed",
      features: [
        "Real-time log monitoring",
        "Rule-based alerting system",
        "Interactive event visualization",
        "SQLite for log persistence",
        "React frontend for analytics"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Python Network Port Scanner",
      description: "Developed a multithreaded TCP port scanner for network enumeration and service detection. Implemented banner grabbing to identify running services; improved scan performance using concurrency.",
      technologies: ["Python", "Socket Programming", "Threading"],
      category: "automation",
      icon: <FaCog />,
      year: "2024",
      status: "Completed",
      features: [
        "Multithreaded TCP scanning",
        "Service banner grabbing",
        "Concurrency for faster enumeration",
        "Service detection",
        "Cross-platform support"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "Designed and deployed a responsive site showcasing projects, certifications, and technical skills. Built with React.js and Tailwind CSS for a modern, clean UI.",
      technologies: ["React.js", "Tailwind CSS", "Netlify"],
      category: "web",
      icon: <FaCode />,
      year: "2025",
      status: "Completed",
      features: [
        "Responsive design",
        "Dynamic project filtering",
        "Dark/light theme support",
        "Modern animations",
        "SEO optimized"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Krishna International School",
      description: "Designed and developed a production-ready school website as a freelance project. Focused on clear information architecture, mobile-first layout, and a fast, modern UI for parents and visitors.",
      technologies: ["React.js", "Tailwind CSS", "Vercel"],
      category: "web",
      icon: <FaCode />,
      year: "2026",
      status: "Completed",
      features: [
        "Mobile-first responsive layout",
        "School info, gallery & contact sections",
        "Clean modern UI for parents & visitors",
        "Fast deployment on Vercel",
        "End-to-end client delivery"
      ],
      github: "https://github.com/0xAdarsh404/assignment-project",
      demo: "https://assignment-project-gilt-seven.vercel.app/"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { key: 'security', label: 'Cybersecurity', count: projects.filter(p => p.category === 'security').length },
    { key: 'automation', label: 'Automation', count: projects.filter(p => p.category === 'automation').length },
    { key: 'robotics', label: 'Robotics', count: projects.filter(p => p.category === 'robotics').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section section" ref={sectionRef}>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
              Projects & Experience
            </h2>
          </Col>
        </Row>

        {/* Filter Buttons */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className={`filter-buttons ${isVisible ? 'fade-in-up' : ''}`}>
              {filters.map((filter, index) => (
                <Button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {filter.label}
                  <Badge bg="secondary" className="ms-2">{filter.count}</Badge>
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row>
          {filteredProjects.map((project, index) => (
            <Col lg={6} key={project.id} className="mb-4">
              <Card 
                className={`project-card custom-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card.Header className="project-header">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <div className="project-meta">
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-info">
                      <span className="project-year">{project.year}</span>
                      <Badge 
                        bg={project.status === 'Completed' ? 'success' : 'primary'}
                        className="project-status"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </Card.Header>
                
                <Card.Body>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features mb-3">
                    <h6 className="features-title">Key Features:</h6>
                    <ul className="features-list">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-technologies mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        bg="outline-primary" 
                        className="tech-badge"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
                
                <Card.Footer className="project-footer">
                  <div className="project-links">
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="project-link-btn"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-2" />
                      Code
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="project-link-btn"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Demo
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Professional Experience */}
        <Row className="mt-5">
          <Col lg={12}>
            <h3 className={`subsection-heading ${isVisible ? 'fade-in-up' : ''}`}>
              Professional Experience
            </h3>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={12} className="mb-4">
            <Card className={`experience-card custom-card ${isVisible ? 'fade-in-up' : ''}`}>
              <Card.Header className="experience-header">
                <div className="experience-icon">
                  <FaLaptopCode />
                </div>
                <div className="experience-info">
                  <h4 className="job-title">Freelance Web Developer</h4>
                  <h5 className="company-name">Independent · Remote</h5>
                  <div className="experience-meta">
                    <span className="experience-duration">
                      <FaCalendarAlt className="me-2" />
                      2025 – Present
                    </span>
                    <Badge bg="success" className="experience-status">
                      Active
                    </Badge>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="experience-list">
                  <li>Built and launched a production website for Krishna International School using React.js and Tailwind CSS, with a mobile-first layout tailored for parents and visitors.</li>
                  <li>Owned the full freelance lifecycle — client requirements, UI decisions, responsive development, Vercel deployment, and post-launch refinements.</li>
                  <li>Delivered a clean, fast, and easy-to-navigate school site as an independent developer, handling communication, timelines, and final handoff.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={12}>
            <Card className={`experience-card custom-card ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.15s' }}>
              <Card.Header className="experience-header">
                <div className="experience-icon">
                  <FaShieldAlt />
                </div>
                <div className="experience-info">
                  <h4 className="job-title">Business Development Executive</h4>
                  <h5 className="company-name">FinCrif India Pvt. Ltd., Noida</h5>
                  <div className="experience-meta">
                    <span className="experience-duration">
                      <FaCalendarAlt className="me-2" />
                      Jul 2026 – Aug 2026
                    </span>
                    <Badge bg="secondary" className="experience-status">
                      Completed
                    </Badge>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="experience-list">
                  <li>Maintained accurate customer and case records using CRM tools, ensuring timely follow-through and documentation — a discipline directly transferable to incident logging and case management in a SOC environment.</li>
                  <li>Coordinated with banking partners' cross teams to resolve process issues, building stakeholder-communication and problem-solving skills used daily in security operations.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;