import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91-7307728452',
      link: 'tel:+917307728452'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'adarshpratapsingh.dev@gmail.com',
      link: 'mailto:adarshpratapsingh.dev@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Noida, Uttar Pradesh',
      link: null
    }
  ];

  const socialLinks = [
    {
        icon: FaLinkedin,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/adarsh-pratap-singh-274a73296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        color: '#0077b5'
      },
      {
        icon: FaGithub,
        name: 'GitHub',
        url: 'https://github.com/0xAdarsh404',
        color: '#333'
      }
  ];

  return (
    <section id="contact" className="contact-section py-5" ref={sectionRef}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className={`section-header text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
              <h2 className="section-title">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="section-subtitle">
                Ready to discuss opportunities or collaborate on exciting projects? 
                Let's connect and explore how we can work together.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Contact Information */}
          <Col lg={4}>
            <div className={`contact-info-wrapper ${isVisible ? 'fade-in-left' : ''}`}>
              <Card className="contact-info-card h-100">
                <Card.Body className="p-4">
                  <h4 className="contact-info-title mb-4">
                    <FaEnvelope className="me-2" />
                    Contact Information
                  </h4>
                  
                  <div className="contact-items">
                    {contactInfo.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div 
                          key={index} 
                          className={`contact-item ${isVisible ? 'animate-item' : ''}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="contact-icon">
                            <IconComponent />
                          </div>
                          <div className="contact-details">
                            <h6 className="contact-label">{item.title}</h6>
                            {item.link ? (
                              <a
                                href={item.link}
                                className={`contact-value${item.title === 'Email' ? ' contact-email' : ''}`}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <span className="contact-value">{item.value}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="social-section mt-4">
                    <h6 className="social-title mb-3">Follow Me</h6>
                    <div className="social-links">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-link ${isVisible ? 'animate-item' : ''}`}
                            style={{ 
                              animationDelay: `${(index + 3) * 0.1}s`,
                              '--social-color': social.color
                            }}
                            title={social.name}
                          >
                            <IconComponent />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <div className={`contact-form-wrapper ${isVisible ? 'fade-in-right' : ''}`}>
              <Card className="contact-form-card h-100">
                <Card.Body className="p-4">
                  <h4 className="contact-form-title mb-4">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </h4>

                  {showAlert && (
                    <Alert variant="success" className="alert-custom">
                      <strong>Message Sent!</strong> Thank you for reaching out. I'll get back to you soon.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label">
                            <FaUser className="me-2" />Name *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label">
                            <FaEnvelope className="me-2" />Email *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="form-label">
                            <FaComment className="me-2" />Subject *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="What's this about?"
                            required
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="form-label">
                            <FaComment className="me-2" />Message *
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell me about your project, opportunity, or just say hello..."
                            required
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Button 
                          type="submit" 
                          className="submit-btn w-100"
                          size="lg"
                        >
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col xs={12}>
            <div className={`cta-section text-center ${isVisible ? 'fade-in-up' : ''}`}>
              <Card className="cta-card">
                <Card.Body className="p-4">
                  <h4 className="cta-title mb-3">
                    Ready to Start Something Amazing?
                  </h4>
                  <p className="cta-text mb-4">
                    Whether you're looking for a cybersecurity intern, need help with a project, 
                    or just want to connect, I'm always excited to hear about new opportunities.
                  </p>
                  <div className="cta-buttons">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      href="mailto:adarshpratapsingh.dev@gmail.com"
                      className="cta-btn me-3 mb-2"
                    >
                      <FaEnvelope className="me-2" />
                      Email Me
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="lg" 
                      href="https://www.linkedin.com/in/adarsh-pratap-singh-274a73296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn mb-2"
                    >
                      <FaLinkedin className="me-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;